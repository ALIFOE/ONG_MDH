<template>
  <div>
    <div v-if="error" class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div>
    <div v-else-if="!form" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>

    <form v-else novalidate @submit.prevent="save">
      <div class="adm-page-head">
        <div>
          <h1>Infos du site</h1>
          <p>Coordonnées, réseaux sociaux et moyens de paiement affichés sur toutes les pages.</p>
        </div>
        <button type="submit" class="adm-btn adm-btn-primary" :disabled="saving || !dirty">
          <i class="fa-solid" :class="saving ? 'fa-spinner fa-spin' : 'fa-check'"></i>Enregistrer
        </button>
      </div>

      <div class="adm-stack">
        <section class="adm-card">
          <div class="adm-card-head"><h2><i class="fa-solid fa-address-card me-2 text-primary"></i>Coordonnées</h2></div>
          <div class="adm-card-body">
            <div class="adm-row">
              <label class="adm-field">
                <span class="adm-label">Email de contact</span>
                <input v-model="form.contact.email" class="adm-input" :class="{ 'is-invalid': fieldError === 'contact.email' }" type="email">
              </label>
              <label class="adm-field">
                <span class="adm-label">Téléphone</span>
                <input v-model="form.contact.phone" class="adm-input" type="tel">
              </label>
            </div>
            <div class="adm-row">
              <label class="adm-field">
                <span class="adm-label">Adresse</span>
                <input v-model="form.contact.address" class="adm-input" type="text">
              </label>
              <label class="adm-field">
                <span class="adm-label">Ville, pays</span>
                <input v-model="form.contact.city" class="adm-input" type="text">
              </label>
            </div>
            <div class="adm-row">
              <label class="adm-field">
                <span class="adm-label">Horaires</span>
                <input v-model="form.contact.hours" class="adm-input" type="text">
              </label>
              <label class="adm-field">
                <span class="adm-label">Lieu sur la carte (Google Maps)</span>
                <input v-model="form.contact.mapQuery" class="adm-input" type="text">
                <span class="adm-hint">Texte recherché pour placer le repère de la carte sur la page Contact.</span>
              </label>
            </div>
          </div>
        </section>

        <section class="adm-card">
          <div class="adm-card-head">
            <h2><i class="fa-solid fa-share-nodes me-2 text-primary"></i>Réseaux sociaux</h2>
            <button type="button" class="adm-btn adm-btn-sm" @click="form.socials.push({ label: 'Facebook', icon: 'fa-facebook-f', href: '' })"><i class="fa-solid fa-plus"></i>Ajouter</button>
          </div>
          <div class="adm-card-body">
            <p v-if="!form.socials.length" class="adm-hint mt-0">Aucun réseau social affiché.</p>
            <div v-for="(social, index) in form.socials" :key="index" class="d-flex gap-2 align-items-end mb-3">
              <label class="adm-field flex-shrink-0" style="width: 170px; margin: 0;">
                <span class="adm-label">Réseau</span>
                <select class="adm-input" :value="social.icon" @change="setNetwork(social, $event.target.value)">
                  <option v-for="network in networks" :key="network.icon" :value="network.icon">{{ network.label }}</option>
                </select>
              </label>
              <label class="adm-field flex-grow-1" style="margin: 0;">
                <span class="adm-label">Adresse de la page</span>
                <input v-model="social.href" class="adm-input" type="url" placeholder="https://…">
              </label>
              <button type="button" class="adm-btn adm-btn-ghost adm-btn-danger adm-btn-icon mb-1" :aria-label="`Retirer ${social.label}`" @click="form.socials.splice(index, 1)"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </section>

        <section class="adm-card">
          <div class="adm-card-head"><h2><i class="fa-solid fa-hand-holding-dollar me-2 text-primary"></i>Dons</h2></div>
          <div class="adm-card-body">
            <label class="adm-field">
              <span class="adm-label">Lien PayPal pour les dons</span>
              <input v-model="form.donation.paypalUrl" class="adm-input" type="url" placeholder="https://www.paypal.com/donate/?hosted_button_id=…">
              <span class="adm-hint">Utilisez un lien de don PayPal (bouton « Faire un don » ou PayPal.Me), pas l'adresse de votre tableau de bord.</span>
            </label>
            <div class="adm-row">
              <label class="adm-field">
                <span class="adm-label">Banque</span>
                <input v-model="form.donation.bankName" class="adm-input" type="text">
              </label>
              <label class="adm-field">
                <span class="adm-label">Titulaire du compte</span>
                <input v-model="form.donation.bankHolder" class="adm-input" type="text">
              </label>
            </div>
            <label class="adm-field">
              <span class="adm-label">IBAN</span>
              <input v-model="form.donation.iban" class="adm-input" type="text" style="font-family: ui-monospace, Consolas, monospace;">
            </label>
            <div class="adm-row">
              <label class="adm-field">
                <span class="adm-label">Mobile Money : service</span>
                <input v-model="form.donation.mobileMoneyName" class="adm-input" type="text">
              </label>
              <label class="adm-field">
                <span class="adm-label">Mobile Money : numéro</span>
                <input v-model="form.donation.mobileMoneyNumber" class="adm-input" type="tel">
              </label>
            </div>
            <label class="adm-field">
              <span class="adm-label">Mobile Money : référence à indiquer</span>
              <input v-model="form.donation.mobileMoneyReference" class="adm-input" type="text">
            </label>
          </div>
        </section>

        <section v-if="form.notifications" class="adm-card">
          <div class="adm-card-head"><h2><i class="fa-solid fa-bell me-2 text-primary"></i>Notifications par email</h2></div>
          <div class="adm-card-body">
            <label class="adm-check">
              <input v-model="form.notifications.enabled" type="checkbox">
              <span>Recevoir un email à chaque nouveau formulaire envoyé sur le site</span>
            </label>
            <label class="adm-field mt-3">
              <span class="adm-label">Adresse qui reçoit les notifications</span>
              <input v-model="form.notifications.email" class="adm-input" :class="{ 'is-invalid': fieldError === 'notifications.email' }" type="email" :disabled="!form.notifications.enabled">
            </label>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { api, notify } from '../api.js'

const networks = [
  { label: 'Facebook', icon: 'fa-facebook-f' },
  { label: 'Instagram', icon: 'fa-instagram' },
  { label: 'LinkedIn', icon: 'fa-linkedin-in' },
  { label: 'Twitter / X', icon: 'fa-twitter' },
  { label: 'YouTube', icon: 'fa-youtube' },
  { label: 'TikTok', icon: 'fa-tiktok' },
  { label: 'WhatsApp', icon: 'fa-whatsapp' }
]

const form = ref(null)
const error = ref('')
const fieldError = ref('')
const saving = ref(false)
let savedSnapshot = ''
const dirty = computed(() => form.value && JSON.stringify(form.value) !== savedSnapshot)

const load = data => {
  form.value = data
  savedSnapshot = JSON.stringify(data)
}

const setNetwork = (social, icon) => {
  social.icon = icon
  social.label = networks.find(n => n.icon === icon).label.replace(' / X', '')
}

onMounted(async () => {
  try {
    load(await api('/admin/settings'))
  } catch (e) {
    error.value = e.message
  }
})

const save = async () => {
  fieldError.value = ''
  saving.value = true
  try {
    load(await api('/admin/settings', { method: 'PUT', body: form.value }))
    notify('Informations du site enregistrées.')
  } catch (e) {
    fieldError.value = e.data?.field || ''
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}

onBeforeRouteLeave(() => {
  if (dirty.value && !window.confirm('Des modifications ne sont pas enregistrées. Quitter quand même ?')) return false
})
</script>
