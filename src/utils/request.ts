import axios from 'axios'
// import vm from '../main'
import  baseApi  from '../config'
import { getToken } from './auth'
// import { ElMessage } from 'element-plus';
// import router from '@/router';

/* 全局默认配置 */
var http = axios.create({
  baseURL: baseApi.default.baseApi,
  timeout: 5000
})
/* 请求拦截器 */
http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers.timestamp = Math.floor(new Date().getTime() / 1000)
    config.headers.Authorization = getToken('userToken') || ''
    // 接口没返回时显示loadin
    // if (config.loading === true) {
    //   vm.$loading.hide()
    //   vm.$loading.show()
    // }
    return config
  },
  error => {
    // vm.$loading.hide()
    return Promise.reject(error)
  }
)
/* 响应拦截器 */
http.interceptors.response.use(
  res => {
    // vm.$loading.hide()
    return res
  },
  error => {
    // vm.$loading.hide()
    return Promise.reject(error)
  }
)

export { http }
