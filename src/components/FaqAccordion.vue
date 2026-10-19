<template>
  <div class="accordion" :class="variant">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <h3 class="accordion-header">
        <button
          class="accordion-button"
          :class="{ collapsed: openIndex !== index }"
          type="button"
          :aria-expanded="openIndex === index ? 'true' : 'false'"
          @click="openIndex = openIndex === index ? null : index"
        >
          {{ numbered ? `${index + 1}. ` : '' }}{{ item.question }}
        </button>
      </h3>
      <div class="accordion-collapse collapse" :class="{ show: openIndex === index }">
        <div class="accordion-body">
          <p :class="{ 'fs-16': variant !== 'accordion-style-one' }">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  // [{ question, answer }]
  items: { type: Array, required: true },
  variant: { type: String, default: 'accordion-style-one' },
  numbered: { type: Boolean, default: true }
})

const openIndex = ref(0)
</script>
