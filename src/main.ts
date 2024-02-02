import { createApp } from 'vue'
import App from './App.vue'
import ShopToolItemPlugin from './plugins/ShopToolItemPlugin';

const app = createApp(App);
app.use(ShopToolItemPlugin);
app.mount('#app');