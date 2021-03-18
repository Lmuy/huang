import { createStore } from 'vuex'
import login from './modules/login'
import comic from './modules/comic'

export default createStore({
  state: {
  },
  modules: {
    login,
    comic
  }
})
