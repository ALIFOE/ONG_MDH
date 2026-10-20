<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>Articles</h1>
        <p>Actualités publiées dans la rubrique « Actualités » du site.</p>
      </div>
      <router-link to="/admin/articles/nouveau" class="adm-btn adm-btn-primary"><i class="fa-solid fa-plus"></i>Nouvel article</router-link>
    </div>

    <div class="adm-card">
      <div v-if="error" class="adm-card-body"><div class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div></div>
      <div v-else-if="!items" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>
      <div v-else-if="!items.length" class="adm-empty">
        <i class="fa-solid fa-newspaper d-block"></i>
        <strong>Aucun article</strong>
        Publiez votre première actualité pour la voir apparaître sur le site.
        <div class="mt-3"><router-link to="/admin/articles/nouveau" class="adm-btn adm-btn-primary"><i class="fa-solid fa-plus"></i>Nouvel article</router-link></div>
      </div>
      <div v-else class="adm-table-wrap">
        <table class="adm-table">
          <thead>
            <tr>
              <th style="width: 72px;"><span class="visually-hidden">Image</span></th>
              <th>Titre</th>
              <th>Catégorie</th>
              <th>Statut</th>
              <th>Date</th>
              <th><span class="visually-hidden">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in items" :key="article.id" class="is-link" @click="router.push(`/admin/articles/${article.id}`)">
              <td>
                <img v-if="article.image" :src="article.image" alt="" class="adm-thumb">
                <span v-else class="adm-thumb d-flex align-items-center justify-content-center"><i class="fa-solid fa-image text-secondary"></i></span>
              </td>
              <td>
                <router-link :to="`/admin/articles/${article.id}`" class="adm-strong" @click.stop>{{ article.title }}</router-link>
                <span class="adm-sub">/actualites/{{ article.slug }}<template v-if="article.author"> · par {{ article.author }}</template></span>
              </td>
              <td>{{ article.category || '—' }}</td>
              <td><span class="adm-chip" :class="`is-${article.status}`">{{ article.status === 'published' ? 'Publié' : 'Brouillon' }}</span></td>
              <td class="adm-nowrap">{{ article.date_label || formatDate(article.published_at) }}</td>
              <td class="adm-nowrap text-end" @click.stop>
                <a v-if="article.status === 'published'" :href="`/actualites/${article.slug}`" target="_blank" rel="noopener" class="adm-btn adm-btn-ghost adm-btn-icon" title="Voir sur le site" aria-label="Voir sur le site">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <button type="button" class="adm-btn adm-btn-ghost adm-btn-danger adm-btn-icon" title="Supprimer" :aria-label="`Supprimer ${article.title}`" @click="remove(article)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api, notify } from '../api.js'
import { formatDate } from '../format.js'

const router = useRouter()
const items = ref(null)
const error = ref('')

onMounted(async () => {
  try {
    items.value = (await api('/admin/articles')).items
  } catch (e) {
    error.value = e.message
  }
})

const remove = async article => {
  if (!window.confirm(`Supprimer l'article « ${article.title} » ? Il disparaîtra du site.`)) return
  try {
    await api(`/admin/articles/${article.id}`, { method: 'DELETE' })
    items.value = items.value.filter(a => a.id !== article.id)
    notify('Article supprimé.')
  } catch (e) {
    notify(e.message, 'error')
  }
}
</script>
