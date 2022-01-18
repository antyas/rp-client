import { createApp } from 'vue';
import { pinia } from '@/shared/lib/store';
import App from './App.vue';
import router from './router';
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);
app.use(pinia);

new WaveUI(app);
app.use(router);


app.mount('#app');
