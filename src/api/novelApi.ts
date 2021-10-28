import { http } from '@/utils/request';
interface ISearch {
  globalName: string,
  orderBy: string,
  ascending: boolean,
  pageSize: number,
  pageNo: number
}

// 获取当前歌曲列表
export function getMusicList(data: ISearch) {
  return http({
    url: '/page/music/list',
    method: 'post',
    data
  });
}
