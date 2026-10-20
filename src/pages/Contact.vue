<script setup>
import { ref, computed } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import ContactBlocks from '@/components/ContactBlocks.vue'
import images from '@/data/images.js'
import { contact } from '@/data/site.js'
import { sendForm } from '@/api/public.js'

const mapUrl = computed(() => `https://maps.google.com/maps?hl=fr&q=${encodeURIComponent(contact.mapQuery)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`)

const subjects = {
  general: 'Question générale',
  donation: 'Question sur les dons',
  volunteer: 'Devenir bénévole',
  partnership: 'Proposition de partenariat',
  press: 'Contact presse',
  other: 'Autre'
}

const emptyForm = () => ({
  firstname: '',
  lastname: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

const form = ref(emptyForm())
const submitted = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  errorMessage.value = ''
  submitted.value = false

  // Validation
  if (!form.value.firstname || !form.value.lastname || !form.value.email || !form.value.subject || !form.value.message) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  if (!form.value.privacy) {
    errorMessage.value = 'Vous devez accepter les conditions de traitement de vos données.'
    return
  }

  isSubmitting.value = true

  try {
    await sendForm('contact', {
      name: `${form.value.firstname} ${form.value.lastname}`,
      email: form.value.email,
      fields: {
        'Prénom': form.value.firstname,
        'Nom': form.value.lastname,
        'Sujet': subjects[form.value.subject] || form.value.subject,
        'Message': form.value.message
      }
    })

    submitted.value = true
    form.value = emptyForm()
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
      title="Contactez-nous"
      :crumbs="[{ label: 'Contact' }]"
      :image="images.image1"
      subtitle="Une question ? Un projet ? N'hésitez pas à nous contacter. Nous sommes là pour vous répondre."
    />

    <div class="contact-map-banner w-100" style="height: 480px;">
      <div class="gmap_canvas h-100 w-100">
        <iframe
          class="gmap_iframe h-100 w-100 border-0"
          :src="mapUrl"
          title="Localisation du siège de MDH à Apédokoè, Lomé"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div class="contact-section pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <ContactBlocks />

        <div class="contact-form-section position-relative z-1 mt-100 lg-mt-60">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <h2>N'hésitez pas à nous envoyer votre message</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <div class="form-style-one md-mb-40">
                <h4>Formulaire de contact</h4>
                <form novalidate @submit.prevent="handleSubmit">
                  <div class="row controls">
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label" for="firstname">Prénom *</label>
                        <input id="firstname" v-model="form.firstname" type="text" placeholder="Votre prénom" required>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label" for="lastname">Nom *</label>
                        <input id="lastname" v-model="form.lastname" type="text" placeholder="Votre nom" required>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label" for="email">Email *</label>
                        <input id="email" v-model="form.email" type="email" placeholder="vous@exemple.com" required>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label" for="subject">Sujet *</label>
                        <select id="subject" v-model="form.subject" required>
                          <option value="">Choisissez un sujet</option>
                          <option value="general">Question générale</option>
                          <option value="donation">Question sur les dons</option>
                          <option value="volunteer">Devenir bénévole</option>
                          <option value="partnership">Proposition de partenariat</option>
                          <option value="press">Contact presse</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="input-wrapper mb-20">
                        <label class="field-label" for="message">Message *</label>
                        <textarea id="message" v-model="form.message" class="tall" placeholder="Écrivez votre message..." required></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="mdh-check mb-25">
                        <input v-model="form.privacy" type="checkbox" required>
                        <span>J'accepte que mes données soient traitées pour la gestion de ma demande de contact</span>
                      </label>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn-one w-100" :disabled="isSubmitting">
                        <span v-if="!isSubmitting">Envoyer le message</span>
                        <span v-else><i class="fa-solid fa-spinner fa-spin me-2"></i>Envoi en cours...</span>
                      </button>
                    </div>
                  </div>
                </form>

                <div v-if="submitted" class="mdh-alert success" role="status">
                  <i class="fa-solid fa-circle-check me-2"></i>Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                </div>
                <div v-if="errorMessage" class="mdh-alert error" role="alert">
                  <i class="fa-solid fa-circle-exclamation me-2"></i>{{ errorMessage }}
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="address-block version-two text-center mt-15">
                <div class="icon m-auto rounded-circle d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-building"></i>
                </div>
                <h6>Visitez notre siège</h6>
                <p>{{ contact.address }}, {{ contact.city }}</p>
              </div>
              <div class="address-block version-two text-center mt-15">
                <div class="icon m-auto rounded-circle d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <h6>Contact rapide</h6>
                <p class="fs-20"><a :href="contact.phoneHref">{{ contact.phone }}</a></p>
              </div>
              <img :src="images.rapport1" alt="Activités au siège de MDH" class="mdh-rounded-img mt-30 mx-auto d-none d-lg-block" style="max-width: 300px;">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
