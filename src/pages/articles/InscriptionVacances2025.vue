<template>
  <div>
    <PageBanner
      title="Inscription Vacances Utiles 2025"
      :crumbs="[{ label: 'Vacances Utiles 2025', to: '/actualites/vacances-utiles-2025' }, { label: 'Inscription' }]"
      :image="images.article1"
      subtitle="Inscrivez votre enfant au programme « L'Académie des Super-Enfants »."
    />

    <div class="pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="form-wrapper-card form-style-one">
              <h3 class="mb-30">Formulaire d'inscription</h3>
              <form novalidate @submit.prevent="submitInscription">
                <!-- Parent -->
                <h4 class="form-section-title"><i class="fa-solid fa-user-tie"></i>Informations du parent / tuteur</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.parentNom" type="text" placeholder="Nom du parent *" aria-label="Nom du parent" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.parentPrenom" type="text" placeholder="Prénom du parent *" aria-label="Prénom du parent" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.parentEmail" type="email" placeholder="Email *" aria-label="Email" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.parentTelephone" type="tel" placeholder="Téléphone *" aria-label="Téléphone" required></div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20"><input v-model="form.parentAdresse" type="text" placeholder="Adresse *" aria-label="Adresse" required></div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20"><input v-model="form.parentProfession" type="text" placeholder="Profession" aria-label="Profession"></div>
                  </div>
                </div>

                <!-- Enfant -->
                <h4 class="form-section-title"><i class="fa-solid fa-child"></i>Informations de l'enfant</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.enfantNom" type="text" placeholder="Nom de l'enfant *" aria-label="Nom de l'enfant" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.enfantPrenom" type="text" placeholder="Prénom de l'enfant *" aria-label="Prénom de l'enfant" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <select v-model="form.enfantSexe" aria-label="Sexe" required>
                        <option value="">Sexe *</option>
                        <option value="male">Garçon</option>
                        <option value="female">Fille</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.enfantDateNaissance" type="date" aria-label="Date de naissance" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <select v-model="form.enfantClasse" aria-label="Classe" required>
                        <option value="">Classe *</option>
                        <option value="cp">CP</option>
                        <option value="ce1">CE1</option>
                        <option value="ce2">CE2</option>
                        <option value="cm1">CM1</option>
                        <option value="cm2">CM2</option>
                        <option value="6eme">6ème</option>
                        <option value="5eme">5ème</option>
                        <option value="4eme">4ème</option>
                        <option value="3eme">3ème</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <select v-model="form.enfantEcole" aria-label="École actuelle">
                        <option value="">École actuelle</option>
                        <option value="ecole-mdh">École MDH</option>
                        <option value="autre">Autre école</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Options -->
                <h4 class="form-section-title"><i class="fa-solid fa-calendar-days"></i>Options du programme</h4>
                <div class="row">
                  <div class="col-md-6 mb-15">
                    <label class="mdh-choice" :class="{ 'is-checked': form.periodes.includes('mercredi') }">
                      <input v-model="form.periodes" type="checkbox" value="mercredi">
                      <span><strong>Mercredis à 14h</strong></span>
                    </label>
                  </div>
                  <div class="col-md-6 mb-15">
                    <label class="mdh-choice" :class="{ 'is-checked': form.periodes.includes('samedi') }">
                      <input v-model="form.periodes" type="checkbox" value="samedi">
                      <span><strong>Samedis à 14h</strong></span>
                    </label>
                  </div>
                </div>
                <div class="mdh-note mb-30">
                  <i class="fa-solid fa-circle-info"></i>Sélectionnez au moins une journée pour que votre enfant participe au programme.
                </div>

                <!-- Infos supplémentaires -->
                <h4 class="form-section-title"><i class="fa-solid fa-star"></i>Informations supplémentaires</h4>
                <div class="input-wrapper mb-20">
                  <label class="field-label">Allergies ou restrictions alimentaires</label>
                  <textarea v-model="form.restrictions" placeholder="Décrivez les allergies ou restrictions (optionnel)"></textarea>
                </div>
                <div class="input-wrapper mb-25">
                  <label class="field-label">Besoins spéciaux ou remarques</label>
                  <textarea v-model="form.besoinsSpeciaux" placeholder="Décrivez les besoins spéciaux ou autres remarques (optionnel)"></textarea>
                </div>

                <label class="mdh-check">
                  <input v-model="form.acceptTermes" type="checkbox" required>
                  <span>J'accepte que les données de mon enfant soient traitées pour l'inscription au programme de vacances utiles. Je comprends que l'ONG MDH utilisera ces informations uniquement à des fins pédagogiques et de sécurité. *</span>
                </label>
                <label class="mdh-check mb-30">
                  <input v-model="form.acceptPhotos" type="checkbox">
                  <span>J'accepte que des photos de mon enfant soient prises pendant le programme à des fins documentaires et promotionnelles</span>
                </label>

                <button type="submit" :disabled="isSubmitting || form.periodes.length === 0" class="btn-one w-100">
                  {{ isSubmitting ? 'Inscription en cours...' : 'Inscrire mon enfant' }}
                </button>
                <p class="text-center fs-16 mt-20 mb-0">* Champs obligatoires</p>
              </form>

              <div v-if="successMessage" class="mdh-alert success" role="status">
                <i class="fa-solid fa-circle-check me-2"></i>{{ successMessage }}
              </div>
              <div v-if="errorMessage" class="mdh-alert error" role="alert">
                <i class="fa-solid fa-circle-exclamation me-2"></i>{{ errorMessage }}
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <aside class="template-sidebar ps-xxl-4 md-mt-60">
              <div class="widget-banner-three border-10 overflow-hidden position-relative z-1">
                <h5 class="sidebar-title">Important à savoir</h5>
                <dl class="bank-details m-0">
                  <dt><i class="fa-solid fa-location-dot me-2"></i>Lieu</dt>
                  <dd>Siège de l'ONG MDH, Sagbado Apédokoè, Lomé, Togo</dd>
                  <dt><i class="fa-solid fa-clock me-2"></i>Horaires</dt>
                  <dd>Mercredis et samedis à 14h</dd>
                  <dt><i class="fa-solid fa-heart me-2"></i>Prix</dt>
                  <dd>Programme gratuit pour tous les enfants</dd>
                  <dt><i class="fa-solid fa-envelope me-2"></i>Contact</dt>
                  <dd>
                    <a :href="`mailto:${contact.email}`">{{ contact.email }}</a><br>
                    <a :href="contact.phoneHref">{{ contact.phone }}</a>
                  </dd>
                </dl>
              </div>

              <div class="widget-banner-two text-center border-10 overflow-hidden position-relative z-1 mt-40">
                <h4>Des questions ?</h4>
                <p class="fs-16 pb-10">Contactez-nous pour plus d'informations sur le programme.</p>
                <router-link to="/contact" class="btn-one">Nous contacter</router-link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'
import { contact } from '@/data/site.js'
import { sendForm } from '@/api/public.js'

const router = useRouter()
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const emptyForm = () => ({
  parentNom: '',
  parentPrenom: '',
  parentEmail: '',
  parentTelephone: '',
  parentAdresse: '',
  parentProfession: '',
  enfantNom: '',
  enfantPrenom: '',
  enfantSexe: '',
  enfantDateNaissance: '',
  enfantClasse: '',
  enfantEcole: '',
  periodes: [],
  restrictions: '',
  besoinsSpeciaux: '',
  acceptTermes: false,
  acceptPhotos: false
})

const form = ref(emptyForm())

const submitInscription = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  // Validation
  if (!form.value.parentNom || !form.value.parentPrenom || !form.value.parentEmail) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires du parent.'
    return
  }

  if (!form.value.enfantNom || !form.value.enfantPrenom || !form.value.enfantSexe || !form.value.enfantDateNaissance) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires de l\'enfant.'
    return
  }

  if (form.value.periodes.length === 0) {
    errorMessage.value = 'Veuillez sélectionner au moins une journée de participation.'
    return
  }

  if (!form.value.acceptTermes) {
    errorMessage.value = 'Vous devez accepter les conditions pour inscrire votre enfant.'
    return
  }

  isSubmitting.value = true

  try {
    const formData = {
      'Nom du parent': form.value.parentNom,
      'Prénom du parent': form.value.parentPrenom,
      'Email': form.value.parentEmail,
      'Téléphone': form.value.parentTelephone,
      'Adresse': form.value.parentAdresse,
      'Profession': form.value.parentProfession,
      'Nom de l\'enfant': form.value.enfantNom,
      'Prénom de l\'enfant': form.value.enfantPrenom,
      'Sexe': form.value.enfantSexe,
      'Date de naissance': form.value.enfantDateNaissance,
      'Classe': form.value.enfantClasse,
      'École': form.value.enfantEcole,
      'Jours de participation': form.value.periodes.join(', '),
      'Allergies/Restrictions': form.value.restrictions || 'Aucune',
      'Besoins spéciaux': form.value.besoinsSpeciaux || 'Aucun',
      'Accepte conditions': form.value.acceptTermes ? 'Oui' : 'Non',
      'Accepte photos': form.value.acceptPhotos ? 'Oui' : 'Non'
    }

    await sendForm('vacances', {
      name: `${form.value.parentPrenom} ${form.value.parentNom}`,
      email: form.value.parentEmail,
      phone: form.value.parentTelephone,
      fields: formData
    })

    successMessage.value = 'Inscription réussie ! Merci d\'avoir inscrit votre enfant. Nous vous contacterons bientôt pour confirmer.'
    form.value = emptyForm()

    // Redirection vers la page du programme
    setTimeout(() => {
      router.push('/actualites/vacances-utiles-2025')
    }, 2000)
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isSubmitting.value = false
  }
}
</script>
