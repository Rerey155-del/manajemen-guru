import './assets/main.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

createApp(App)
  .use(router)
  .mount('#app')