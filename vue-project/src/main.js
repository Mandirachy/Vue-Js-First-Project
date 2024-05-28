// import './assets/main.css'
// import './assets/css/style.css';
import './assets/js/script.js';

// script();

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
