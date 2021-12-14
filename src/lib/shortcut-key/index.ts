import { checkAll } from "./lib/shortcutKey"
export const ShortCut = {
    bind: function(args: string | Array<string>, fn: Function){
      debugger
      if (typeof(args) === 'string') {
        // 多个键的事件
        if(args.indexOf('+') > 0) {
          const newArg = args.split('+')
          
          checkAll(newArg, fn)
        }
        // 单个键的事件
        else {
          const newArg = [args.toLocaleUpperCase()]
          checkAll(newArg, fn)
        }
      } else if (args instanceof Array) {
          // 支持多个快捷键
          console.log(args)
      }
    }
}

