<script setup>
import { ref } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'
import { donation } from '@/data/site.js'
import { sendForm } from '@/api/public.js'

const presets = [10, 20, 50, 100, 200]

const emptyForm = () => ({ amount: '', firstname: '', lastname: '', email: '', phone: '', message: '' })
const form = ref(emptyForm())

const submitted = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

// Le don est enregistré dans l'admin, puis le donateur finalise le paiement sur PayPal
const handleSubmit = async () => {
  errorMessage.value = ''
  isSubmitting.value = true
  try {
    await sendForm('don', {
      name: `${form.value.firstname} ${form.value.lastname}`,
      email: form.value.email,
      phone: form.value.phone,
      amount: form.value.amount,
      fields: {
        'Prénom': form.value.firstname,
        'Nom': form.value.lastname,
        'Montant': `${form.value.amount} €`,
        'Message': form.value.message || 'Aucun message'
      }
    })
    submitted.value = true
    form.value = emptyForm()
    window.open(donation.paypalUrl, '_blank', 'noopener')
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <PageBanner
      title="Faire un don"
      :crumbs="[{ label: `S'engager` }, { label: 'Faire un don' }]"
      :image="images.ecole4"
      subtitle="Transformez une vie par votre générosité."
    />

    <div class="pt-110 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="case-details">
              <div class="media-bg" :style="{ backgroundImage: `url(${images.ecole4})` }">
                <div class="tags">Éducation · Santé · Développement durable</div>
              </div>

              <h2>Transformez une vie par votre générosité</h2>
              <p>
                Votre contribution soutient directement nos projets d'éducation, de santé et de développement durable au Togo. Chaque don, quel que soit son montant, aide les enfants et les familles que nous accompagnons à construire un avenir meilleur.
              </p>

              <h3>Ce que votre don rend possible</h3>
              <div class="bg-pink case-feature mt-30">
                <h5>1. Une éducation de qualité</h5>
                <p>Construction d'écoles, fournitures scolaires, formation d'enseignants et soutien scolaire pour plus de 230 enfants.</p>
                <h5>2. La santé et le bien-être</h5>
                <p>Campagnes de sensibilisation, hygiène et accès aux soins de base pour les familles vulnérables.</p>
                <h5>3. Un développement durable</h5>
                <p>Agroécologie, accès à l'eau potable et formation des femmes et des jeunes.</p>
              </div>

              <div class="media-bg-two" :style="{ backgroundImage: `url(${images.ecole3})` }"></div>

              <form id="donation-form" class="bg-pink donation-wrapper" @submit.prevent="handleSubmit">
                <h3>Faites un don dès maintenant</h3>
                <div class="donate-amount">
                  <ul class="style-none d-flex flex-wrap custom-donation">
                    <li><label for="donation-amount" class="m-0">Montant du don (€) *</label></li>
                    <li>
                      €
                      <input id="donation-amount" v-model="form.amount" type="number" min="1" step="0.01" placeholder="0.00" required>
                    </li>
                  </ul>
                  <ul class="style-none d-flex flex-wrap donation-filter">
                    <li v-for="preset in presets" :key="preset">
                      <input :id="`preset-${preset}`" v-model="form.amount" type="radio" name="donateAmount" :value="preset">
                      <label :for="`preset-${preset}`">{{ preset }} €</label>
                    </li>
                  </ul>
                </div>

                <h3>Vos informations</h3>
                <div class="info-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <input v-model="form.firstname" type="text" placeholder="Prénom *" aria-label="Prénom" required>
                    </div>
                    <div class="col-lg-6">
                      <input v-model="form.lastname" type="text" placeholder="Nom *" aria-label="Nom" required>
                    </div>
                    <div class="col-lg-6">
                      <input v-model="form.email" type="email" placeholder="Email *" aria-label="Email" required>
                    </div>
                    <div class="col-lg-6">
                      <input v-model="form.phone" type="tel" placeholder="Téléphone" aria-label="Téléphone">
                    </div>
                    <div class="col-12">
                      <textarea v-model="form.message" placeholder="Partagez vos motivations... (optionnel)" aria-label="Message"></textarea>
                    </div>
                  </div>
                </div>

                <h6>Total du don : <span>{{ form.amount ? `${form.amount} €` : '—' }}</span></h6>
                <div class="payment-selected-box d-flex flex-column justify-content-center align-items-center">
                  <span><i class="fa-solid fa-lock me-2"></i>Paiement sécurisé via PayPal</span>
                  <i class="fa-brands fa-paypal fs-1 mt-2" style="color: #003087;"></i>
                </div>
                <button type="submit" class="donate-cta tran3s" :disabled="isSubmitting">
                  <i class="fa-solid me-2" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-heart'"></i>Procéder au paiement PayPal
                </button>

                <div v-if="submitted" class="mdh-alert success" role="status">
                  <i class="fa-solid fa-circle-check me-2"></i>Merci pour votre générosité ! Finalisez votre don dans la fenêtre PayPal (ou via le lien ci-dessous si elle ne s'est pas ouverte).
                </div>
                <div v-if="errorMessage" class="mdh-alert error" role="alert">
                  <i class="fa-solid fa-circle-exclamation me-2"></i>{{ errorMessage }}
                </div>

                <div class="mt-40">
                  <p class="fw-500 mb-15">Ou donnez directement via PayPal :</p>
                  <a :href="donation.paypalUrl" target="_blank" rel="noopener noreferrer" class="btn-one xs">
                    <i class="fa-brands fa-paypal me-2"></i>Donner sur PayPal
                  </a>
                  <p class="fs-16 mt-10 mb-0">Lien sécurisé PayPal - s'ouvre dans une nouvelle fenêtre</p>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-4">
            <aside class="template-sidebar ps-xxl-4 md-mt-60">
              <div class="widget-banner-one text-center border-10 overflow-hidden position-relative z-1">
                <div class="amount font-amita rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-heart"></i></div>
                <h5>Votre don fait une réelle différence</h5>
                <router-link :to="{ hash: '#donation-form' }" class="btn-one inverse">Donner maintenant</router-link>
              </div>

              <div class="widget-banner-two border-10 overflow-hidden position-relative z-1 mt-40">
                <h4 class="text-center">Virement bancaire</h4>
                <p class="fs-16 text-center pb-10">Vous pouvez nous soutenir par virement bancaire directement.</p>
                <div class="payment-logos text-center mb-10"><img :src="images.logoIbank" :alt="donation.bankName"></div>
                <dl class="bank-details m-0">
                  <dt>Banque</dt>
                  <dd>{{ donation.bankName }}</dd>
                  <dt>Titulaire</dt>
                  <dd>{{ donation.bankHolder }}</dd>
                  <dt>IBAN</dt>
                  <dd><span class="iban">{{ donation.iban }}</span></dd>
                </dl>
              </div>

              <div class="widget-banner-three border-10 overflow-hidden position-relative z-1 mt-40">
                <h5 class="sidebar-title">Mobile Money</h5>
                <div class="payment-logos mb-20"><img :src="images.logoMixByYas" :alt="donation.mobileMoneyName"></div>
                <dl class="bank-details m-0">
                  <dt>{{ donation.mobileMoneyName }}</dt>
                  <dd><a :href="`tel:${donation.mobileMoneyNumber.replace(/[^\d+]/g, '')}`">{{ donation.mobileMoneyNumber }}</a></dd>
                  <dt>Référence</dt>
                  <dd>{{ donation.mobileMoneyReference }}</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
