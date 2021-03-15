// 工具类

import moment from 'moment';

export function formatDate(time: Date) {
  return moment(time).format('YYYY-MM-DD')
}