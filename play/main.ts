import { createApp } from 'vue';
import App from './app.vue';
import UI from '@ui/components';

const app = createApp(App);

app.use(UI);

app.mount('#app');
