//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
