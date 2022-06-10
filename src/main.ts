import { createApp } from 'vue'
import App from './App.vue'
import { naiveUIInstance } from './naiveComponentsConfig';

import router from './router';

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(naiveUIInstance);
app.use(router);
app.mount('#app');
