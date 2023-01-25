import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import './assets/main.css';

const app = createApp(App);
app.use(router);

app.mount('#app')
