<template>
  <Teleport to="body">
    <Transition name="adm-drawer">
      <div v-if="open" class="adm adm-portal">
        <div class="adm-drawer-backdrop" @click="emit('close')"></div>
        <form class="adm-drawer" role="dialog" aria-modal="true" :aria-label="title" novalidate @submit.prevent="emit('submit')" @keydown.esc="emit('close')">
          <div class="adm-drawer-head">
            <h2>{{ title }}</h2>
            <button type="button" class="adm-btn adm-btn-ghost adm-btn-icon" aria-label="Fermer" @click="emit('close')"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="adm-drawer-body">
            <slot />
          </div>
          <div class="adm-drawer-foot">
            <button type="button" class="adm-btn" @click="emit('close')">Annuler</button>
            <button type="submit" class="adm-btn adm-btn-primary" :disabled="busy">
              <i class="fa-solid" :class="busy ? 'fa-spinner fa-spin' : 'fa-check'"></i>{{ submitLabel }}
            </button>
          </div>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, required: true },
  submitLabel: { type: String, default: 'Enregistrer' },
  busy: { type: Boolean, default: false }
})
const emit = defineEmits(['close', 'submit'])
</script>
