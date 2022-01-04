import { checkAll } from "./lib/shortcutKey"
export const ShortCut = {
    // 快捷键绑定键，快捷键执行回调，是否禁止浏览器默认快捷键
    bind: function(args: string | Array<string>, fn: Function, prevent: boolean = false){
      if (typeof(args) === 'string') {
        // 多个键的事件
        if(args.indexOf('+') > 0) {
          const newArg = args.split('+')
          // 全部变大写
          // const upperArg = newArg.map((item) => {
          //   return item.toLocaleUpperCase()
          // })
          checkAll(newArg, fn, prevent)
        }
        // 单个键的事件
        else {
          const newArg = [args.toLocaleUpperCase()]
          checkAll(newArg, fn, prevent)
        }
      } else if (args instanceof Array) {
          // 支持多个快捷键
          console.log(args)
      }
    }
}

