<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>{{ current.label }}</h1>
        <p>{{ intro }}</p>
      </div>
      <div class="adm-actions">
        <button type="button" class="adm-btn" :disabled="!list?.total || exporting" @click="exportCsv">
          <i class="fa-solid" :class="exporting ? 'fa-spinner fa-spin' : 'fa-file-arrow-down'"></i>Exporter (Excel)
        </button>
      </div>
    </div>

    <nav class="adm-tabs" aria-label="Formulaires">
      <router-link v-for="type in submissionTypes" :key="type.value" :to="`/admin/demandes/${type.value}`" :class="{ 'is-active': type.value === current.value }">
        {{ type.label }}
        <span v-if="unread[type.value]" class="adm-new">{{ unread[type.value] }}</span>
      </router-link>
    </nav>

    <div class="adm-filters">
      <div class="adm-segmented" role="group" aria-label="Filtrer par statut">
        <button v-for="filter in statusFilters" :key="filter.value" type="button" :class="{ 'is-active': status === filter.value }" @click="setStatus(filter.value)">
          {{ filter.label }}
        </button>
      </div>
      <form class="adm-search ms-auto" role="search" @submit.prevent="applySearch">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="search" class="adm-input" type="search" placeholder="Nom, email ou téléphone" aria-label="Rechercher" @search="applySearch">
      </form>
    </div>

    <div class="adm-card">
      <div v-if="error" class="adm-card-body"><div class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div></div>
      <div v-else-if="!list" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>
      <div v-else-if="!list.items.length" class="adm-empty">
        <i class="fa-solid fa-inbox d-block"></i>
        <strong>{{ route.query.q ? 'Aucun résultat' : 'Aucune demande' }}</strong>
        {{ route.query.q ? 'Essayez une autre recherche.' : 'Rien à afficher avec ce filtre.' }}
      </div>
      <template v-else>
        <div class="adm-table-wrap">
          <table class="adm-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Contact</th>
                <th v-if="current.value === 'don'">Montant</th>
                <th>Statut</th>
                <th>Reçue</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in list.items"
                :key="item.id"
                class="is-link"
                :class="{ 'is-unread': item.status === 'nouveau' }"
                @click="open(item)"
              >
                <td>
                  <router-link :to="`/admin/demandes/fiche/${item.id}`" class="adm-strong" @click.stop>{{ item.name }}</router-link>
                </td>
                <td>
                  <span class="d-block">{{ item.email }}</span>
                  <span v-if="item.phone" class="adm-sub">{{ item.phone }}</span>
                </td>
                <td v-if="current.value === 'don'" class="adm-nowrap adm-strong">{{ formatMoney(item.amount) }}</td>
                <td><span class="adm-chip" :class="`is-${item.status}`">{{ statusLabel(item.status, item.type) }}</span></td>
                <td class="adm-nowrap"><span :title="formatDateTime(item.created_at)">{{ timeAgo(item.created_at) }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="adm-pagination">
          <span>
            {{ list.total }} demande{{ list.total > 1 ? 's' : '' }}
            <template v-if="list.amount !== null"> · total {{ formatMoney(list.amount) }}</template>
          </span>
          <span v-if="list.pages > 1" class="adm-actions">
            <button type="button" class="adm-btn adm-btn-sm" :disabled="list.page <= 1" @click="goToPage(list.page - 1)"><i class="fa-solid fa-chevron-left"></i>Précédent</button>
            <span>Page {{ list.page }} / {{ list.pages }}</span>
            <button type="button" class="adm-btn adm-btn-sm" :disabled="list.page >= list.pages" @click="goToPage(list.page + 1)">Suivant<i class="fa-solid fa-chevron-right"></i></button>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api, unread, downloadFile, notify } from '../api.js'
import { submissionTypes, statusLabel } from '../constants.js'
import { formatDateTime, formatMoney, timeAgo } from '../format.js'

const route = useRoute()
const router = useRouter()

const intros = {
  adhesion: "Demandes d'adhésion envoyées depuis le formulaire « Devenir membre ».",
  benevole: 'Candidatures envoyées depuis le formulaire « Rejoignez-nous ».',
  parrainage: 'Demandes de parrainage envoyées depuis la page Parrainage.',
  don: 'Dons déclarés depuis la page « Faire un don ». Passez-les à « Reçu » une fois le paiement confirmé.',
  vacances: 'Inscriptions des enfants au programme Vacances Utiles.',
  contact: 'Messages envoyés depuis la page Contact.'
}

const current = computed(() => submissionTypes.find(t => t.value === route.params.type) || submissionTypes[0])
const intro = computed(() => intros[current.value.value])

const statusFilters = computed(() => [
  { value: 'actifs', label: 'À traiter' },
  { value: 'nouveau', label: 'Nouveaux' },
  { value: 'traite', label: current.value.value === 'don' ? 'Reçus' : 'Traités' },
  { value: 'archive', label: 'Archivés' },
  { value: '', label: 'Tous' }
])

const status = computed(() => (typeof route.query.statut === 'string' ? route.query.statut : 'actifs'))
const search = ref('')
const list = ref(null)
const error = ref('')
const exporting = ref(false)

const query = () => new URLSearchParams({
  type: current.value.value,
  status: status.value,
  q: route.query.q || '',
  page: route.query.page || '1'
}).toString()

const load = async () => {
  error.value = ''
  list.value = null
  try {
    list.value = await api(`/admin/submissions?${query()}`)
    Object.assign(unread, list.value.unread)
  } catch (e) {
    error.value = e.message
  }
}

const updateQuery = changes => router.replace({ query: { ...route.query, page: undefined, ...changes } })

const setStatus = value => updateQuery({ statut: value === 'actifs' ? undefined : value })
const applySearch = () => updateQuery({ q: search.value.trim() || undefined })
const goToPage = page => router.replace({ query: { ...route.query, page: page > 1 ? page : undefined } })

const open = item => router.push(`/admin/demandes/fiche/${item.id}`)

const exportCsv = async () => {
  exporting.value = true
  try {
    await downloadFile(`/admin/submissions/export?${query()}`)
  } catch (e) {
    notify(e.message, 'error')
  } finally {
    exporting.value = false
  }
}

watch(() => [route.params.type, route.query.statut, route.query.q, route.query.page], () => {
  if (route.name !== 'AdminSubmissions') return
  search.value = typeof route.query.q === 'string' ? route.query.q : ''
  load()
}, { immediate: true })
</script>
