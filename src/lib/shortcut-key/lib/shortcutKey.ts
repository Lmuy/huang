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
  let arr: any = []
  let i = 0
  document.addEventListener("keydown", (e) => {
    if (prevent) {
      e.preventDefault()
    }
    let len = args.length
    for (const x of args) {
      if (e.keyCode === parseInt(keyboard[args[i]])) {
        if (!arr.includes(args[i])) {
          arr.push(args[i])
        }
        i++
      }
    }
    if (i === len && arr.length === i) {
      i = 0
      fn(args)
    } else if (i === len && arr.length !== i) {
      i = 0
    }
  });
  document.addEventListener("keyup", (e) => {
    for (const x of args) {
      if (e.keyCode === parseInt(keyboard[x])) {
        arr = arr.filter((item: any) => item !== x)
      }
    }
  });
}