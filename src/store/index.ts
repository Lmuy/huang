import { createStore } from 'vuex'
const path = require('path')
const requireModules = require.context('./modules', true, /index\.(ts|js)$/iu)
const modules: any = {}
requireModules.keys().forEach((filePath: string): void => {
  const modular = requireModules(filePath)
  let name = path.resolve(filePath, '..')
  name = name.split('/').pop()
  modules[name] = {
    namespaced: true,
    ...modular.default
  }
})

export default createStore({
  state: {
  },
  modules: {
    ...modules
  }
})
