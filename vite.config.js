import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

// Copie l'API PHP dans dist/api : tout le site se déploie en envoyant le dossier dist.
// config.php (identifiants) et le routeur de développement ne sont jamais copiés.
const copyApi = () => ({
  name: 'mdh-copy-api',
  apply: 'build',
  closeBundle() {
    const source = path.resolve(__dirname, 'api')
    fs.cpSync(source, path.resolve(__dirname, 'dist/api'), {
      recursive: true,
      filter: file => !['config.php', 'dev-router.php'].includes(path.relative(source, file))
    })
  }
})

export default defineConfig({
  base: '/',
  plugins: [vue(), copyApi()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    host: '127.0.0.1',
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: '127.0.0.1',
      port: 5174,
    },
    // API PHP de l'espace admin, lancée à part avec « npm run api »
    proxy: {
      '/api': 'http://127.0.0.1:8000',
      '/uploads': 'http://127.0.0.1:8000',
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
        }
      }
    }
  }
})
