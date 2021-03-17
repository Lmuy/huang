import { ILogin, IRegistar, ISetting } from './index.type'
import {
  login,
  register,
  setting,
  logout
} from '@/api/loginApi';

const loginHang = {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    // 登陆
    login({}, data: ILogin): any {
      // return new Promise((resolve, reject) => {
      //   login(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(login(data).data);
      })
    },
    // 注册
    register({}, data: IRegistar): any {
      // return new Promise((resolve, reject) => {
      //   register(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
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
    logout({}, data: ILogin): any {
      // return new Promise((resolve, reject) => {
      //   logout(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(logout(data).data);
      })
    },
  }
}
export default loginHang