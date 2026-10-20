<template>
  <div>
    <PageBanner
      title="Parrainage"
      :crumbs="[{ label: `S'engager` }, { label: 'Parrainage' }]"
      :image="images.photoEcole"
      subtitle="Changez la vie d'un enfant en devenant parrain ou marraine. Un engagement personnel et durable."
    />

    <!-- Pourquoi / Comment -->
    <div class="feature-block-four position-relative z-1 pt-140 lg-pt-80 pb-120 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-7" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-xl-4">
              <div class="title-one mb-30">
                <div class="upper-title">Un geste qui change tout</div>
                <h2>Pourquoi parrainer ?</h2>
              </div>
              <div class="row">
                <div v-for="(reason, i) in reasons" :key="reason.title" class="col-md-6">
                  <div class="feature-box mt-20" :style="{ background: i % 3 === 0 ? '#fbf8e8' : '#e0e9f6' }">
                    <div class="d-flex align-items-center">
                      <div class="icon rounded-circle"></div>
                      <h5>{{ reason.title }}</h5>
                    </div>
                    <p class="fs-16">{{ reason.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 md-mt-50" data-sal="slide-left" data-sal-duration="900">
            <div class="mdh-card">
              <h3 class="mb-30">Comment ça marche ?</h3>
              <ol class="mdh-steps">
                <li v-for="step in steps" :key="step.title">
                  <h5>{{ step.title }}</h5>
                  <p>{{ step.text }}</p>
                </li>
              </ol>
              <router-link :to="{ hash: '#formulaire-parrainage' }" class="btn-one w-100 d-block">Je deviens parrain</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notre engagement -->
    <div class="feature-block-seven no-extend position-relative pt-120 lg-pt-80 pb-120 lg-pb-80">
      <div class="container">
        <div class="title-one text-center" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Nos garanties</div>
          <h2>Notre engagement</h2>
        </div>
      </div>
      <div class="box-layout-two">
        <div class="box-wrapper d-flex flex-wrap align-items-stretch justify-content-center">
          <div v-for="(item, i) in commitments" :key="item.title" class="card-box mt-25" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 200">
            <div class="icon rounded-circle m-auto d-flex align-items-center justify-content-center"><i class="fa-solid" :class="item.icon"></i></div>
            <h5>{{ item.title }}</h5>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulaire -->
    <div id="formulaire-parrainage" class="pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-10 m-auto">
            <div class="title-one text-center mb-50" data-sal="slide-up" data-sal-duration="900">
              <div class="upper-title">Formulaire de parrainage</div>
              <h2>Devenez parrain ou marraine</h2>
              <p class="mt-20">Remplissez ce formulaire pour démarrer votre aventure de parrainage.</p>
            </div>

            <div class="form-wrapper-card form-style-one">
              <form novalidate @submit.prevent="submitForm">
                <h4 class="form-section-title"><i class="fa-solid fa-user"></i>Informations personnelles</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.nom" type="text" placeholder="Nom *" aria-label="Nom" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.prenom" type="text" placeholder="Prénom *" aria-label="Prénom" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <select v-model="form.sexe" aria-label="Sexe" required>
                        <option value="">Sexe *</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.dateNaissance" type="date" aria-label="Date de naissance" required></div>
                  </div>
                </div>

                <h4 class="form-section-title"><i class="fa-solid fa-envelope"></i>Coordonnées</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.email" type="email" placeholder="Email *" aria-label="Email" required></div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20"><input v-model="form.telephone" type="tel" placeholder="Téléphone *" aria-label="Téléphone" required></div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20"><input v-model="form.adresse" type="text" placeholder="Adresse postale *" aria-label="Adresse postale" required></div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20"><input v-model="form.profession" type="text" placeholder="Profession" aria-label="Profession"></div>
                  </div>
                </div>

                <h4 class="form-section-title"><i class="fa-solid fa-child"></i>Préférences de parrainage</h4>
                <div class="row">
                  <div class="col-md-4">
                    <div class="input-wrapper mb-20">
                      <select v-model="form.typeParrainage" aria-label="Type de parrainage" required>
                        <option value="">Type de parrainage *</option>
                        <option value="education">Éducation</option>
                        <option value="health">Santé</option>
                        <option value="complete">Complet</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-wrapper mb-20"><input v-model="form.agePreference" type="number" placeholder="Âge préféré (5-18)" min="5" max="18" aria-label="Âge préféré"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-wrapper mb-20">
                      <select v-model="form.sexePreference" aria-label="Sexe préféré">
                        <option value="">Sexe préféré</option>
                        <option value="any">Indifférent</option>
                        <option value="male">Garçon</option>
                        <option value="female">Fille</option>
                      </select>
                    </div>
                  </div>
                </div>

                <h4 class="form-section-title"><i class="fa-solid fa-comment"></i>Message</h4>
                <div class="input-wrapper mb-30">
                  <textarea v-model="form.message" placeholder="Message à l'équipe (optionnel)" aria-label="Message"></textarea>
                </div>

                <button type="submit" :disabled="isSubmitting" class="btn-one w-100">
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de parrainage' }}
                </button>
              </form>

              <div v-if="successMessage" class="mdh-alert success" role="status">
                <i class="fa-solid fa-circle-check me-2"></i>{{ successMessage }}
              </div>
              <div v-if="errorMessage" class="mdh-alert error" role="alert">
                <i class="fa-solid fa-circle-exclamation me-2"></i>{{ errorMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'
import { sendForm } from '@/api/public.js'

const reasons = [
  { title: "Accès à l'école", text: "Permettre à un enfant d'accéder à l'école et à des soins de santé." },
  { title: 'Accompagnement personnalisé', text: 'Offrir un accompagnement éducatif et social personnalisé.' },
  { title: 'Lien solidaire durable', text: 'Créer un lien solidaire et humain durable.' },
  { title: 'Impact communautaire', text: "Contribuer au développement de toute une communauté." }
]

const steps = [
  { title: 'Remplissez le formulaire', text: 'Remplissez le formulaire de parrainage avec vos informations.' },
  { title: 'Rencontre virtuelle', text: 'Nous vous contactons pour présenter un enfant correspondant à votre profil.' },
  { title: 'Recevez des nouvelles', text: 'Recevez régulièrement des nouvelles et photos de votre filleul(e).' },
  { title: 'Échangez et suivez', text: "Échangez et suivez l'évolution de votre filleul(e) dans son parcours." }
]

const commitments = [
  { icon: 'fa-shield-halved', title: 'Protection garantie', text: 'Garantir la sécurité physique et émotionnelle de chaque enfant avec des protocoles stricts de protection.' },
  { icon: 'fa-book', title: 'Éducation de qualité', text: "Offrir un environnement d'apprentissage stimulant, respectueux et inclusif pour chaque enfant." },
  { icon: 'fa-heart', title: 'Accompagnement humain', text: "Encourager le respect des différences et valoriser l'unicité de chaque enfant avec bienveillance." }
]

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const emptyForm = () => ({
  nom: '',
  prenom: '',
  sexe: '',
  dateNaissance: '',
  email: '',
  telephone: '',
  adresse: '',
  profession: '',
  typeParrainage: '',
  agePreference: '',
  sexePreference: '',
  message: ''
})

const form = ref(emptyForm())

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  // Validation des champs obligatoires
  if (!form.value.nom || !form.value.prenom || !form.value.email || !form.value.telephone) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  isSubmitting.value = true

  try {
    await sendForm('parrainage', {
      name: `${form.value.prenom} ${form.value.nom}`,
      email: form.value.email,
      phone: form.value.telephone,
      fields: {
        'Nom': form.value.nom,
        'Prénom': form.value.prenom,
        'Sexe': { male: 'Homme', female: 'Femme' }[form.value.sexe] || '',
        'Date de naissance': form.value.dateNaissance,
        'Adresse': form.value.adresse,
        'Profession': form.value.profession,
        'Type de parrainage': { education: 'Éducation', health: 'Santé', complete: 'Complet' }[form.value.typeParrainage] || '',
        'Âge préféré': form.value.agePreference || 'Non spécifié',
        'Sexe préféré': { male: 'Garçon', female: 'Fille' }[form.value.sexePreference] || 'Indifférent',
        'Message': form.value.message || 'Aucun message'
      }
    })

    successMessage.value = 'Merci ! Votre demande de parrainage a bien été reçue. Notre équipe vous contactera bientôt.'
    form.value = emptyForm()
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isSubmitting.value = false
  }
}
</script>
