import { http } from '@/utils/request';
import { formatDate } from '@/utils/format';
import { ICreate } from '@/store/modules/comic/index.type'

const tableData = [{
  name: '进击的巨人',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.3,
  website: 'https://www.baidu.com',
  reason: '进击的巨人真的很好看',
  hits: 86
}, {
  name: '转生成史莱姆这档事',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.2,
  website: 'https://www.baidu.com',
  reason: '转生成史莱姆这档事真的很好看',
  hits: 46
}, {
  name: '斗罗大陆',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.0,
  website: 'https://www.baidu.com',
  reason: '斗罗大陆真的很好看',
  hits: 67
}, {
  name: '刺客五六七',
  references: 'Lmuy',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  createTime: formatDate(new Date()),
  score: 4.2,
  website: 'https://www.baidu.com',
  reason: '刺客五六七真的很好看',
  hits: 56
}]


// 获取当前推荐详情
export function getComicDetail(data :string) {
  // return post({
  //   url: '/huang_api/comic/detail',
  //   data
  // });
  return {
    data: tableData.filter(item => item.name === data)[0]
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
export function addComic(data :ICreate) {
  // return post({
  //   url: '/huang_api/comic/add',
  //   data
  // });
  return {
    data: true
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

