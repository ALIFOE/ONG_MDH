<template>
  <div>
    <div v-if="error" class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div>
    <div v-else-if="!item" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>

    <template v-else>
      <div class="adm-page-head">
        <div>
          <router-link :to="`/admin/demandes/${item.type}`" class="adm-back"><i class="fa-solid fa-arrow-left"></i>{{ typeLabelPlural }}</router-link>
          <h1>{{ item.name }}</h1>
          <p>{{ typeLabel(item.type) }} · reçue le {{ formatDateTime(item.created_at) }}</p>
        </div>
        <div class="adm-actions">
          <a :href="`mailto:${item.email}`" class="adm-btn"><i class="fa-solid fa-envelope"></i>Répondre par email</a>
          <a v-if="item.phone" :href="`tel:${item.phone.replace(/[^\d+]/g, '')}`" class="adm-btn"><i class="fa-solid fa-phone"></i>Appeler</a>
        </div>
      </div>

      <div class="adm-grid-sidebar">
        <section class="adm-card">
          <div class="adm-card-head"><h2>Informations envoyées</h2></div>
          <dl class="adm-dl">
            <dt>Nom</dt>
            <dd>{{ item.name }}</dd>
            <dt>Email</dt>
            <dd><a :href="`mailto:${item.email}`">{{ item.email }}</a></dd>
            <template v-if="item.phone">
              <dt>Téléphone</dt>
              <dd>{{ item.phone }}</dd>
            </template>
            <template v-if="item.amount !== null">
              <dt>Montant déclaré</dt>
              <dd class="adm-strong">{{ formatMoney(item.amount) }}</dd>
            </template>
            <template v-for="([label, value], index) in item.fields" :key="index">
              <dt>{{ label }}</dt>
              <dd>{{ value || '—' }}</dd>
            </template>
          </dl>
        </section>

        <aside class="adm-stack">
          <section class="adm-card adm-card-body">
            <h2 class="mb-3">Suivi</h2>
            <label class="adm-field">
              <span class="adm-label">Statut</span>
              <select v-model="form.status" class="adm-input">
                <option v-for="s in statuses" :key="s.value" :value="s.value">{{ statusLabel(s.value, item.type) }}</option>
              </select>
            </label>
            <label class="adm-field">
              <span class="adm-label">Notes internes</span>
              <textarea v-model="form.notes" class="adm-input" rows="5" placeholder="Ex. : rappelé le 12/10, rendez-vous prévu…"></textarea>
              <span class="adm-hint">Visibles uniquement par les administrateurs.</span>
            </label>
            <button type="button" class="adm-btn adm-btn-primary adm-btn-block mt-3" :disabled="saving || !dirty" @click="save">
              <i class="fa-solid" :class="saving ? 'fa-spinner fa-spin' : 'fa-check'"></i>Enregistrer
            </button>
          </section>

          <section class="adm-card adm-card-body">
            <div class="adm-meta-list">
              <div><span>N° de demande</span><strong>#{{ item.id }}</strong></div>
              <div><span>Reçue</span><span class="text-end">{{ formatDateTime(item.created_at) }}</span></div>
              <div><span>Dernière mise à jour</span><span class="text-end">{{ formatDateTime(item.updated_at) }}</span></div>
            </div>
            <button type="button" class="adm-btn adm-btn-danger adm-btn-sm mt-3" @click="remove">
              <i class="fa-solid fa-trash"></i>Supprimer définitivement
            </button>
          </section>
        </aside>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, notify, refreshUnread } from '../api.js'
import { submissionTypes, statuses, typeLabel, statusLabel } from '../constants.js'
import { formatDateTime, formatMoney } from '../format.js'

const route = useRoute()
const router = useRouter()

const item = ref(null)
const error = ref('')
const saving = ref(false)
const form = ref({ status: '', notes: '' })

const typeLabelPlural = computed(() => submissionTypes.find(t => t.value === item.value?.type)?.label || 'Demandes')
const dirty = computed(() => item.value && (form.value.status !== item.value.status || form.value.notes !== item.value.notes))

const setItem = data => {
  item.value = data
  form.value = { status: data.status, notes: data.notes }
}

onMounted(async () => {
  try {
    const data = await api(`/admin/submissions/${route.params.id}`)
    // Ouvrir une nouvelle demande la passe automatiquement « En cours »
    if (data.status === 'nouveau') {
      setItem(await api(`/admin/submissions/${data.id}`, { method: 'PATCH', body: { status: 'en_cours' } }))
      refreshUnread()
    } else {
      setItem(data)
    }
  } catch (e) {
    error.value = e.message
  }
})

const save = async () => {
  saving.value = true
  try {
    setItem(await api(`/admin/submissions/${item.value.id}`, { method: 'PATCH', body: form.value }))
    refreshUnread()
    notify('Demande mise à jour.')
  } catch (e) {
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}

const remove = async () => {
  if (!window.confirm(`Supprimer définitivement la demande de ${item.value.name} ? Cette action est irréversible.`)) return
  try {
    await api(`/admin/submissions/${item.value.id}`, { method: 'DELETE' })
    notify('Demande supprimée.')
    router.replace(`/admin/demandes/${item.value.type}`)
  } catch (e) {
    notify(e.message, 'error')
  }
}
</script>
