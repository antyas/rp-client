import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router';
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);

new WaveUI(app);
app.use(router)
app.use(createPinia());


app.mount('#app');
