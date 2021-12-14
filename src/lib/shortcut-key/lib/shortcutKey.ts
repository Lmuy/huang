// 判断是什么系统
const agent = navigator.userAgent.toLowerCase();
const isMac = /macintosh|mac os x/i.test(navigator.userAgent);

import { keyboard } from './keyboard'


export const checkAll = (args: any, fn: Function) => {
  if (Array.isArray(args)) {
    checkDown(args, fn)
  }
}

const checkDown = (args: any, fn: Function) => {
  let i = 0
  document.addEventListener("keydown", (e) => {
    let len = args.length
    for (const x of args) {
      if (e.keyCode === parseInt(keyboard[x])) {
        i++
      }
    }
    if (i === len) {
      i = 0
      fn(args)
    }
  });
}