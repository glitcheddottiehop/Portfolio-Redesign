import './assets/main.scss';

import { VueElement, createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { ComponentLibrary } from '@rehaps/rehaps-web-components-vue';
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ComponentLibrary);

app.mount('#app');
