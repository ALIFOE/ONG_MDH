import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Feuilles de style du template Hopeu
import './assets/template/css/bootstrap.min.css'
import './assets/template/css/style.min.css'
import './assets/template/css/responsive.css'
// Adaptations MDH (couleurs, remplacements d'images, composants maison)
import './assets/mdh.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
