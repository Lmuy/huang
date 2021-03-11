import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from './element'
import store from './store'
import '@/style/common.scss'

createApp(App).use(store).use(router).use(Element).mount('#app')
