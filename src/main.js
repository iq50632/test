import { createApp } from 'vue'
import { createPinia } from 'pinia'

import vuetify from './vuetify.js'

// import store from './store'
// import axios from 'axios'
// import isBetween from 'dayjs/plugin/isBetween'
// import toArray from 'dayjs/plugin/toArray'
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
// import isSameOrAfter from 'dayjs/plugin/isSameOrAfter' 

// Vue.config.productionTip = false
// app.config.globalProperties.$http = axios
// dayjs.extend(isBetween).extend(toArray).extend(isSameOrBefore).extend(isSameOrAfter)

import App from './App.vue'
import router from './router.js'
const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)

app.mount('#app')
