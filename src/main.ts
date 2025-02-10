import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/styles/main.css';
import { validateConfig } from './utils/config';

const app = createApp(App);
const pinia = createPinia();

if (!validateConfig()) {
  throw new Error('Invalid configuration. Check console for details.');
}

app.use(pinia);
app.use(router);

app.mount('#app'); 