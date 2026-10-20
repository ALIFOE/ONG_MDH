<template>
  <div class="adm-editor">
    <div v-if="editor" class="adm-editor-toolbar" role="toolbar" aria-label="Mise en forme">
      <button v-for="tool in blockTools" :key="tool.label" type="button" :class="{ 'is-active': tool.active() }" :title="tool.label" :aria-label="tool.label" @click="tool.run">
        <i v-if="tool.icon" class="fa-solid" :class="tool.icon"></i><span v-else>{{ tool.text }}</span>
      </button>
      <span class="sep"></span>
      <button v-for="tool in inlineTools" :key="tool.label" type="button" :class="{ 'is-active': tool.active() }" :title="tool.label" :aria-label="tool.label" @click="tool.run">
        <i class="fa-solid" :class="tool.icon"></i>
      </button>
      <span class="sep"></span>
      <button type="button" :class="{ 'is-active': editor.isActive('link') }" title="Lien" aria-label="Lien" @click="setLink"><i class="fa-solid fa-link"></i></button>
      <button type="button" title="Insérer une image" aria-label="Insérer une image" :disabled="uploading" @click="fileInput.click()">
        <i class="fa-solid" :class="uploading ? 'fa-spinner fa-spin' : 'fa-image'"></i>
      </button>
      <button type="button" title="Séparateur" aria-label="Séparateur" @click="editor.chain().focus().setHorizontalRule().run()"><i class="fa-solid fa-minus"></i></button>
      <span class="sep"></span>
      <button type="button" title="Annuler" aria-label="Annuler" :disabled="!editor.can().undo()" @click="editor.chain().focus().undo().run()"><i class="fa-solid fa-rotate-left"></i></button>
      <button type="button" title="Rétablir" aria-label="Rétablir" :disabled="!editor.can().redo()" @click="editor.chain().focus().redo().run()"><i class="fa-solid fa-rotate-right"></i></button>
      <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden @change="insertImage">
    </div>
    <EditorContent :editor="editor" />
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { uploadImage, notify } from '../api.js'

const props = defineProps({
  modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const uploading = ref(false)

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({ heading: { levels: [2, 3, 4] }, code: false, codeBlock: false }),
    Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { target: null, rel: null } }),
    Image
  ],
  editorProps: {
    attributes: { class: 'adm-prose', 'aria-label': "Contenu de l'article" }
  },
  onUpdate: ({ editor }) => emit('update:modelValue', editor.isEmpty ? '' : editor.getHTML())
})

const chain = () => editor.value.chain().focus()

const blockTools = [
  { label: 'Paragraphe', text: '¶', active: () => editor.value.isActive('paragraph'), run: () => chain().setParagraph().run() },
  { label: 'Titre de section', text: 'H2', active: () => editor.value.isActive('heading', { level: 2 }), run: () => chain().toggleHeading({ level: 2 }).run() },
  { label: 'Sous-titre', text: 'H3', active: () => editor.value.isActive('heading', { level: 3 }), run: () => chain().toggleHeading({ level: 3 }).run() },
  { label: 'Liste à puces', icon: 'fa-list-ul', active: () => editor.value.isActive('bulletList'), run: () => chain().toggleBulletList().run() },
  { label: 'Liste numérotée', icon: 'fa-list-ol', active: () => editor.value.isActive('orderedList'), run: () => chain().toggleOrderedList().run() },
  { label: 'Citation', icon: 'fa-quote-left', active: () => editor.value.isActive('blockquote'), run: () => chain().toggleBlockquote().run() }
]

const inlineTools = [
  { label: 'Gras', icon: 'fa-bold', active: () => editor.value.isActive('bold'), run: () => chain().toggleBold().run() },
  { label: 'Italique', icon: 'fa-italic', active: () => editor.value.isActive('italic'), run: () => chain().toggleItalic().run() },
  { label: 'Barré', icon: 'fa-strikethrough', active: () => editor.value.isActive('strike'), run: () => chain().toggleStrike().run() }
]

const setLink = () => {
  const previous = editor.value.getAttributes('link').href || ''
  const url = window.prompt('Adresse du lien (laisser vide pour retirer le lien) :', previous)
  if (url === null) return
  if (url.trim() === '') {
    chain().extendMarkRange('link').unsetLink().run()
    return
  }
  const href = /^(https?:\/\/|\/|mailto:|tel:)/i.test(url.trim()) ? url.trim() : `https://${url.trim()}`
  chain().extendMarkRange('link').setLink({ href }).run()
}

const insertImage = async event => {
  const file = event.target.files[0]
  event.target.value = ''
  if (!file) return
  uploading.value = true
  try {
    const src = await uploadImage(file)
    chain().setImage({ src, alt: '' }).run()
  } catch (e) {
    notify(e.message, 'error')
  } finally {
    uploading.value = false
  }
}

// Contenu chargé après coup (ouverture d'un article existant)
watch(() => props.modelValue, value => {
  if (!editor.value) return
  const current = editor.value.isEmpty ? '' : editor.value.getHTML()
  if (value !== current) editor.value.commands.setContent(value || '', false)
})

onBeforeUnmount(() => editor.value?.destroy())
</script>
