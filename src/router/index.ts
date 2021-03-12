import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Comic from '../views/comic/index.vue'
import VarietyShow from '../views/varietyShow/index.vue'
import Novel from '../views/novel/index.vue'
import Movies from '../views/movies/index.vue'
import Layout from '../views/layout/index.vue'
import Register from '../views/register/index.vue'
import Login from '../views/login/index.vue'
import Setting from '../views/setting/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/comic/index',
    children: [
      {
        path: '/comic/index',
        component: Comic,
        name: 'Comic',
        meta: { title: 'Comic', icon: 'comic' }
      }
    ]
  },
  {
    path: '/register',
    component: Layout,
    redirect: '/register/index',
    children: [
      {
        path: '/register/index',
        component: Register,
        name: 'Register',
        meta: { title: 'Register', icon: 'register' }
      }
    ]
  },
  {
    path: '/login',
    component: Layout,
    redirect: '/login/index',
    children: [
      {
        path: '/login/index',
        component: Login,
        name: 'Login',
        meta: { title: 'Login', icon: 'login' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/index',
    children: [
      {
        path: '/setting/index',
        component: Setting,
        name: 'Setting',
        meta: { title: 'Setting', icon: 'setting' }
      }
    ]
  },
  {
    path: '/varietyShow',
    component: Layout,
    redirect: '/varietyShow/index',
    children: [
      {
        path: '/varietyShow/index',
        component: VarietyShow,
        name: 'VarietyShow',
        meta: { title: 'VarietyShow', icon: 'varietyShow' }
      }
    ]
  },
  {
    path: '/novel',
    component: Layout,
    redirect: '/novel/index',
    children: [
      {
        path: '/novel/index',
        component: Novel,
        name: 'Novel',
        meta: { title: 'Novel', icon: 'novel' }
      }
    ]
  },
  {
    path: '/movies',
    component: Layout,
    redirect: '/movies/index',
    children: [
      {
        path: '/movies/index',
        component: Movies,
        name: 'Movies',
        meta: { title: 'Movies', icon: 'movies' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
