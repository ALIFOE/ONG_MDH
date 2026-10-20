<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>Bonjour {{ firstName }} 👋</h1>
        <p>Voici ce qui se passe sur le site MDH.</p>
      </div>
    </div>

    <div v-if="error" class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div>
    <div v-else-if="!data" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>

    <div v-else class="adm-stack">
      <template v-if="data.submissions">
        <h2>Demandes reçues</h2>
        <div class="adm-stats">
          <router-link v-for="type in submissionTypes" :key="type.value" :to="`/admin/demandes/${type.value}`" class="adm-card adm-stat">
            <div class="adm-stat-top">
              <span class="adm-stat-icon"><i class="fa-solid" :class="type.icon"></i></span>
              <span v-if="data.submissions[type.value].nouveau" class="adm-new">{{ data.submissions[type.value].nouveau }} nouveau{{ data.submissions[type.value].nouveau > 1 ? 'x' : '' }}</span>
            </div>
            <div class="adm-stat-value">{{ data.submissions[type.value].total }}</div>
            <div class="adm-stat-label">{{ type.label }}</div>
          </router-link>
        </div>

        <div class="adm-grid-sidebar">
          <section class="adm-card">
            <div class="adm-card-head">
              <h2>Dernières demandes</h2>
              <router-link to="/admin/demandes/adhesion">Tout voir</router-link>
            </div>
            <div v-if="!data.recent.length" class="adm-empty">
              <i class="fa-solid fa-inbox d-block"></i>
              <strong>Aucune demande pour le moment</strong>
              Les formulaires envoyés depuis le site apparaîtront ici.
            </div>
            <div v-else class="adm-table-wrap">
              <table class="adm-table">
                <tbody>
                  <tr v-for="item in data.recent" :key="item.id" class="is-link" :class="{ 'is-unread': item.status === 'nouveau' }" @click="router.push(`/admin/demandes/fiche/${item.id}`)">
                    <td>
                      <router-link :to="`/admin/demandes/fiche/${item.id}`" class="adm-strong" @click.stop>{{ item.name }}</router-link>
                      <span class="adm-sub">{{ typeLabel(item.type) }}<template v-if="item.amount"> · {{ formatMoney(item.amount) }}</template></span>
                    </td>
                    <td><span class="adm-chip" :class="`is-${item.status}`">{{ statusLabel(item.status, item.type) }}</span></td>
                    <td class="adm-nowrap text-end"><span class="adm-sub">{{ timeAgo(item.created_at) }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="adm-card adm-card-body">
            <h2 class="mb-3">Dons déclarés</h2>
            <div class="adm-meta-list">
              <div><span>Reçus (confirmés)</span><strong>{{ formatMoney(data.donations.received) }}</strong></div>
              <div><span>En attente de confirmation</span><strong>{{ formatMoney(data.donations.pending) }}</strong></div>
            </div>
            <p class="adm-hint mt-3">Les dons sont déclarés par les donateurs sur le site. Marquez-les « Reçu » dès que le paiement est arrivé.</p>
            <router-link to="/admin/demandes/don" class="adm-btn adm-btn-sm mt-2">Gérer les dons</router-link>
          </section>
        </div>
      </template>

      <h2>Contenu du site</h2>
      <div class="adm-stats">
        <router-link to="/admin/articles" class="adm-card adm-stat">
          <div class="adm-stat-top"><span class="adm-stat-icon"><i class="fa-solid fa-newspaper"></i></span></div>
          <div class="adm-stat-value">{{ data.content.articles_published }}</div>
          <div class="adm-stat-label">Articles publiés<template v-if="data.content.articles_draft"> · {{ data.content.articles_draft }} brouillon{{ data.content.articles_draft > 1 ? 's' : '' }}</template></div>
        </router-link>
        <router-link to="/admin/galerie" class="adm-card adm-stat">
          <div class="adm-stat-top"><span class="adm-stat-icon"><i class="fa-solid fa-images"></i></span></div>
          <div class="adm-stat-value">{{ data.content.gallery }}</div>
          <div class="adm-stat-label">Photos ajoutées à la galerie</div>
        </router-link>
        <router-link to="/admin/equipe" class="adm-card adm-stat">
          <div class="adm-stat-top"><span class="adm-stat-icon"><i class="fa-solid fa-people-group"></i></span></div>
          <div class="adm-stat-value">{{ data.content.team }}</div>
          <div class="adm-stat-label">Membres de l'équipe</div>
        </router-link>
        <router-link to="/admin/articles/nouveau" class="adm-card adm-stat">
          <div class="adm-stat-top"><span class="adm-stat-icon"><i class="fa-solid fa-plus"></i></span></div>
          <div class="adm-stat-value" style="font-size: 18px;">Nouvel article</div>
          <div class="adm-stat-label">Publier une actualité</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, session } from '../api.js'
import { submissionTypes, typeLabel, statusLabel } from '../constants.js'
import { formatMoney, timeAgo } from '../format.js'

const router = useRouter()
const data = ref(null)
const error = ref('')

const firstName = computed(() => (session.user?.name || '').split(/\s+/)[0])

onMounted(async () => {
  try {
    data.value = await api('/admin/dashboard')
  } catch (e) {
    error.value = e.message
  }
})
</script>
