<template>
  <div>
    <div v-if="error" class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div>
    <div v-else-if="!form" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>

    <form v-else novalidate @submit.prevent="save">
      <div class="adm-page-head">
        <div>
          <router-link to="/admin/articles" class="adm-back"><i class="fa-solid fa-arrow-left"></i>Articles</router-link>
          <h1>{{ isNew ? 'Nouvel article' : 'Modifier l\'article' }}</h1>
        </div>
        <div class="adm-actions">
          <a v-if="saved?.status === 'published'" :href="`/actualites/${saved.slug}`" target="_blank" rel="noopener" class="adm-btn">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>Voir sur le site
          </a>
          <button type="submit" class="adm-btn adm-btn-primary" :disabled="saving">
            <i class="fa-solid" :class="saving ? 'fa-spinner fa-spin' : 'fa-check'"></i>
            {{ form.status === 'published' ? (saved?.status === 'published' ? 'Enregistrer' : 'Publier') : 'Enregistrer le brouillon' }}
          </button>
        </div>
      </div>

      <div class="adm-grid-sidebar">
        <div class="adm-stack">
          <section class="adm-card adm-card-body">
            <label class="adm-field">
              <span class="adm-label">Titre *</span>
              <input v-model="form.title" class="adm-input" :class="{ 'is-invalid': fieldError === 'title' }" type="text" maxlength="255" required style="font-size: 18px; height: 48px;">
            </label>
            <label class="adm-field">
              <span class="adm-label">Résumé</span>
              <textarea v-model="form.excerpt" class="adm-input" rows="3" maxlength="1000" placeholder="Deux ou trois phrases affichées dans la liste des actualités."></textarea>
            </label>
          </section>

          <section>
            <span class="adm-label">Contenu de l'article</span>
            <RichEditor v-model="form.content" />
          </section>
        </div>

        <aside class="adm-stack">
          <section class="adm-card adm-card-body">
            <h2 class="mb-3">Publication</h2>
            <label class="adm-field">
              <span class="adm-label">Statut</span>
              <select v-model="form.status" class="adm-input">
                <option value="draft">Brouillon (non visible sur le site)</option>
                <option value="published">Publié</option>
              </select>
            </label>
            <label class="adm-field">
              <span class="adm-label">Date de publication</span>
              <input v-model="form.published_at" class="adm-input" :class="{ 'is-invalid': fieldError === 'published_at' }" type="date">
              <span class="adm-hint">Sert à classer les articles, du plus récent au plus ancien.</span>
            </label>
            <label class="adm-field">
              <span class="adm-label">Période affichée (facultatif)</span>
              <input v-model="form.date_label" class="adm-input" type="text" maxlength="80" placeholder="Ex. : Juillet - Août 2025">
              <span class="adm-hint">Remplace la date sur le site.</span>
            </label>
            <label class="adm-field">
              <span class="adm-label">Catégorie</span>
              <input v-model="form.category" class="adm-input" type="text" list="article-categories" maxlength="80" placeholder="Éducation, Plaidoyer…">
              <datalist id="article-categories">
                <option v-for="category in articleCategories" :key="category" :value="category"></option>
              </datalist>
            </label>
          </section>

          <section class="adm-card adm-card-body">
            <h2 class="mb-3">Image principale</h2>
            <ImageField v-model="form.image" :alt="form.title" />
          </section>

          <section class="adm-card adm-card-body">
            <h2 class="mb-3">Adresse de la page</h2>
            <label class="adm-field">
              <span class="adm-label">/actualites/…</span>
              <input v-model="form.slug" class="adm-input" type="text" maxlength="190" :placeholder="isNew ? 'Générée à partir du titre' : ''">
              <span class="adm-hint">Laissez vide pour la générer à partir du titre. Évitez de la changer après publication.</span>
            </label>
          </section>

          <button v-if="!isNew" type="button" class="adm-btn adm-btn-danger" @click="remove"><i class="fa-solid fa-trash"></i>Supprimer l'article</button>
        </aside>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { api, notify } from '../api.js'
import { articleCategories } from '../constants.js'
import RichEditor from '../components/RichEditor.vue'
import ImageField from '../components/ImageField.vue'

const route = useRoute()
const router = useRouter()

const isNew = computed(() => route.name === 'AdminArticleNew')
const form = ref(null)
const saved = ref(null)
const saving = ref(false)
const error = ref('')
const fieldError = ref('')

const fields = ['title', 'slug', 'category', 'date_label', 'published_at', 'excerpt', 'image', 'content', 'status']
const snapshot = value => JSON.stringify(fields.map(key => value?.[key] ?? ''))
let savedSnapshot = ''
const dirty = computed(() => form.value && snapshot(form.value) !== savedSnapshot)

const load = data => {
  saved.value = data
  form.value = Object.fromEntries(fields.map(key => [key, data[key] ?? '']))
  savedSnapshot = snapshot(form.value)
}

onMounted(async () => {
  if (isNew.value) {
    load({ status: 'draft', published_at: new Date().toISOString().slice(0, 10) })
    saved.value = null
    return
  }
  try {
    load(await api(`/admin/articles/${route.params.id}`))
  } catch (e) {
    error.value = e.message
  }
})

const save = async () => {
  fieldError.value = ''
  if (!form.value.title.trim()) {
    fieldError.value = 'title'
    notify('Le titre est obligatoire.', 'error')
    return
  }
  saving.value = true
  try {
    const data = isNew.value
      ? await api('/admin/articles', { method: 'POST', body: form.value })
      : await api(`/admin/articles/${saved.value.id}`, { method: 'PUT', body: form.value })
    load(data)
    notify(data.status === 'published' ? 'Article publié sur le site.' : 'Brouillon enregistré.')
    if (isNew.value) router.replace(`/admin/articles/${data.id}`)
  } catch (e) {
    fieldError.value = e.data?.field || ''
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}

const remove = async () => {
  if (!window.confirm(`Supprimer l'article « ${saved.value.title} » ? Il disparaîtra du site.`)) return
  try {
    await api(`/admin/articles/${saved.value.id}`, { method: 'DELETE' })
    savedSnapshot = snapshot(form.value)
    notify('Article supprimé.')
    router.replace('/admin/articles')
  } catch (e) {
    notify(e.message, 'error')
  }
}

onBeforeRouteLeave(() => {
  if (dirty.value && !window.confirm('Des modifications ne sont pas enregistrées. Quitter quand même ?')) return false
})
</script>
