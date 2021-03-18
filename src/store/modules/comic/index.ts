import { ISearch, ICreate, IDetail, ISupport } from './index.type'
import {
  getComicDetail,
  getComicList,
  addComic,
  hitsComic,
  support
} from '@/api/comicApi';

interface comicState {
  globalName: string
}

const comic = {
  state: {
    globalName: ''
  },
  getters: {
  },
  mutations: {
    CHANGE_GLOBAL_NAME: (state: comicState, searchName: string) => {
      state.globalName = searchName;
    },
  },
  actions: {
    // 改变查询条件
    changeGlobalName({ commit }: any, searchName: string) {
      commit('CHANGE_GLOBAL_NAME', searchName);
    },
    // 列表
    getComicList({}, data: ISearch) {
      // return new Promise((resolve, reject) => {
      //   getComicList(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(getComicList(data).data);
      })
    },
    // 详情
    getComicDetail({}, data: string): any {
      // return new Promise((resolve, reject) => {
      //   getComicDetail(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(getComicDetail(data).data);
      })
    },
    // 创建
    addComic({}, data: ICreate): any {
      // return new Promise((resolve, reject) => {
      //   addComic(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(addComic(data).data);
      })
    },
    // 点击
    hitsComic({}, data: IDetail): any {
      // return new Promise((resolve, reject) => {
      //   hitsComic(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(hitsComic(data).data);
      })
    },
    // 支持/反对
    support({}, data: ISupport): any {
      // return new Promise((resolve, reject) => {
      //   support(data).then(response => {
      //     resolve(response);
      //   }).catch(error => {
      //     reject(error);
      //   })
      // })
      return new Promise((resolve, reject) => {
        resolve(support(data).data);
      })
    },
  }
}
export default comic