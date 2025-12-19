import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ONG_MDH/',
  plugins: [vue()],
  server: {
    port: 5173,
    host: 'localhost',
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
        }
      }
    }
  }
})
