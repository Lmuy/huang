import { post } from '@/utils/request';



// 获取当前推荐详情
export function getComicDetail(data :any) {
  // return post({
  //   url: '/huang_api/comic/detail',
  //   data
  // });
  return {
    data: {}
  };
}

// 获取当前动漫列表
export function getComicList(data :any) {
  // return post({
  //   url: '/huang_api/comic/list',
  //   data
  // });
  return {
    data: []
  }
}

// 推荐动漫
export function addComic(data :any) {
  // return post({
  //   url: '/huang_api/comic/add',
  //   data
  // });
  return {
    data: {}
  }
}

// 增加动漫点击数
export function hitsComic(data :any) {
  // return post({
  //   url: '/huang_api/comic/hits',
  //   data
  // });
  return {
    data: {}
  }
}

// 支持/反对
export function support(data :any) {
  // return post({
  //   url: '/huang_api/comic/support',
  //   data
  // });
  return {
    data: {}
  }
}

