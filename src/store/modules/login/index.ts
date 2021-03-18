import { ILogin, IRegistar, ISetting } from './index.type'
import {
  login,
  register,
  setting,
  logout
} from '@/api/loginApi';

interface loginState {
  loginStatus: boolean
}

const loginHang = {
  state: {
    loginStatus: false
  },
  getters: {
  },
  mutations: {
    CHANGE_LOGIN_STATUS: (state: loginState, status: boolean) => {
      state.loginStatus = status;
    },
  },
  actions: {
    // 登陆
    login({ commit }: any, data: ILogin): any {
      // return new Promise((resolve, reject) => {
      //   login(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      commit('CHANGE_LOGIN_STATUS', true);
      return new Promise((resolve, reject) => {
        resolve(login(data).data);
      })
    },
    // 注册
    register({ commit }: any, data: IRegistar): any {
      // return new Promise((resolve, reject) => {
      //   register(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      commit('CHANGE_LOGIN_STATUS', true);
      return new Promise((resolve, reject) => {
        resolve(register(data).data);
      })
    },
    // 设置
    setting({}, data: ISetting): any {
      // return new Promise((resolve, reject) => {
      //   setting(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(setting(data).data);
      })
    },
    // 登出
    logout({ commit }: any, data: ILogin): any {
      // return new Promise((resolve, reject) => {
      //   logout(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      commit('CHANGE_LOGIN_STATUS', false);
      return new Promise((resolve, reject) => {
        resolve(logout(data).data);
      })
    },
  }
}
export default loginHang