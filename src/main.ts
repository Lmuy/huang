import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from './element'
import store from './store'
import '@/style/common.scss'

// 自己的插件测试
import dyNumber from 'dy-lmuy-number'


createApp(App).use(store).use(router).use(Element).use(dyNumber).mount('#app')
