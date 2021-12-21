// 判断是什么系统
const agent = navigator.userAgent.toLowerCase();
const isMac = /macintosh|mac os x/i.test(navigator.userAgent);

import { keyboard } from './keyboard'


export const checkAll = (args: any, fn: Function, prevent: boolean = false) => {
  if (Array.isArray(args)) {
    checkDown(args, fn, prevent)
  }
}

const checkDown = (args: any, fn: Function, prevent: boolean = false) => {
  let i = 0
  document.addEventListener("keydown", (e) => {
    if (prevent) {
      e.preventDefault()
    }
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