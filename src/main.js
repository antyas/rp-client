import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import store from '@/store/index.js';
import WaveUI from 'wave-ui';
import 'wave-ui/dist/wave-ui.css';

const app = createApp(App);

new WaveUI(app);

app.use(router);
app.use(store);

app.mount('#app');
