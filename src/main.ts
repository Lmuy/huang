import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from './element'
import store from './store'
import '@/style/common.scss'

// 自己的插件测试
import dyNumber from 'dy-lmuy-number'
// 自己的js插件
// var ShortCut = require('../src/lib/shortcut-key')
// 自己的图片插件
import imageView from '@/lib/show-image'


createApp(App).use(store).use(router).use(Element).use(dyNumber).use(imageView).mount('#app')
