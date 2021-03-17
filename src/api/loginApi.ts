import { post } from '@/utils/request';



// 登陆
export function login(data :any) {
  // return post({
  //   url: '/huang_api/login',
  //   data
  // });
  return {
    data: {}
  };
}

// 注册
export function register(data :any) {
  // return post({
  //   url: '/huang_api/register',
  //   data
  // });
  return {
    data: []
  }
}

// 设置
export function setting(data :any) {
  // return post({
  //   url: '/huang_api/setting',
  //   data
  // });
  return {
    data: {}
  }
}

// 退出登陆
export function logout(data :any) {
  // return post({
  //   url: '/huang_api/logout',
  //   data
  // });
  return {
    data: {}
  }
}


