import { post } from '@/utils/request';
import { formatDate } from '@/utils/format';

const tableData = [{
  name: '进击的巨人',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.3
}, {
  name: '转生成史莱姆这档事',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.2
}, {
  name: '斗罗大陆',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.0
}, {
  name: '刺客五六七',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.2
}]


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
    data: tableData
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

