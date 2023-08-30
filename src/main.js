import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')





