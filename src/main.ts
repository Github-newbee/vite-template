// i18n
import { i18n } from './i18n';
// vue router
import router from '@/router/index';
import store from '@/store';
import App from './App.vue';

import 'virtual:windi.css';
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools';
import '@/assets/styles/index.scss';
import '@/assets/styles/theme/index.scss';

const app = createApp(App);
app.use(store);
app.use(router);

app.use(i18n);

app.mount('#app');
