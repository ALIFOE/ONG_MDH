<script setup>
import { useRoute } from 'vue-router'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'

// Mission choisie depuis la page « Nos actions » (?mission=mission5)
const route = useRoute()
const mission = route.query.mission || ''
</script>

<template>
  <div>
    <PageBanner
      title="Rejoignez-nous"
      :crumbs="[{ label: `S'engager` }, { label: 'Nous rejoindre' }]"
      :image="images.parrain"
      subtitle="Devenez bénévole et contribuez à notre mission humanitaire."
    />

    <div class="pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-10 m-auto">
            <div class="title-one text-center mb-50" data-sal="slide-up" data-sal-duration="900">
              <div class="upper-title">Formulaire d'engagement</div>
              <h2>Engagez-vous à nos côtés</h2>
              <p class="mt-20">Les champs marqués d'un astérisque (*) sont obligatoires.</p>
            </div>

            <div class="form-wrapper-card form-style-one">
              <form action="https://formspree.io/f/mwpbyqgw" method="post">
                <input v-if="mission" type="hidden" name="mission" :value="mission">

                <h4 class="form-section-title"><i class="fa-solid fa-user"></i>Vos informations</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="nom">Nom *</label>
                      <input id="nom" type="text" name="nom" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="prenom">Prénom *</label>
                      <input id="prenom" type="text" name="prenom" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="sexe">Sexe *</label>
                      <select id="sexe" name="sexe" required>
                        <option value="">Sélectionner</option>
                        <option value="Femme">Femme</option>
                        <option value="Homme">Homme</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="date_naissance">Date de naissance *</label>
                      <input id="date_naissance" type="date" name="date_naissance" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="email">Email *</label>
                      <input id="email" type="email" name="email" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="telephone">Téléphone *</label>
                      <input id="telephone" type="tel" name="telephone" required>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="adresse">Adresse postale *</label>
                      <input id="adresse" type="text" name="adresse" required>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="profession">Profession</label>
                      <input id="profession" type="text" name="profession">
                    </div>
                  </div>
                </div>

                <h4 class="form-section-title"><i class="fa-solid fa-hand-holding-heart"></i>Type de parrainage *</h4>
                <div class="row mb-20">
                  <div class="col-md-6 mb-15">
                    <label class="mdh-choice">
                      <input type="radio" name="type_parrainage" value="Ponctuel" required>
                      <span><strong>Ponctuel</strong></span>
                    </label>
                  </div>
                  <div class="col-md-6 mb-15">
                    <label class="mdh-choice">
                      <input type="radio" name="type_parrainage" value="Régulier">
                      <span><strong>Régulier</strong></span>
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="age_prefere">Âge préféré de l'enfant</label>
                      <input id="age_prefere" type="text" name="age_prefere" placeholder="ex : 6-12 ans">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label" for="sexe_prefere">Sexe préféré de l'enfant</label>
                      <select id="sexe_prefere" name="sexe_prefere">
                        <option value="">Indifférent</option>
                        <option value="Fille">Fille</option>
                        <option value="Garçon">Garçon</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-25">
                      <label class="field-label" for="message">Message (optionnel)</label>
                      <textarea id="message" name="message" placeholder="Partagez vos motivations..."></textarea>
                    </div>
                  </div>
                </div>

                <label class="mdh-check">
                  <input type="checkbox" name="rgpd" required>
                  <span>J'accepte que mes données soient utilisées par l'Organisation MDH conformément à la politique de confidentialité.</span>
                </label>
                <label class="mdh-check mb-30">
                  <input type="checkbox" name="engagement" required>
                  <span>Je m'engage à respecter l'esprit du parrainage et à soutenir l'enfant dans la durée.</span>
                </label>

                <button type="submit" class="btn-one w-100"><i class="fa-solid fa-heart me-2"></i>Envoyer ma demande</button>
                <p class="text-center fs-16 mt-20 mb-0"><i class="fa-solid fa-lock me-1"></i> Vos informations sont sécurisées</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
