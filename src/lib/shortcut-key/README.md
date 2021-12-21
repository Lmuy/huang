# 快捷键监听插件

支持 windows 和 mac 系统下的键盘监听插件

### 安装

```js
npm install lmuy-shortcut-key --save
```

### 使用

```js
// 所需页面
import { ShortCut } from "lmuy-shortcut-key";

ShortCut.bind(
  "M+D",
  (res) => {
    console.log(res);
  },
  true
);
```

### 可接收三个参数

| 参数   | 说明                         | 类型           | 默认值 |
| :----- | :--------------------------- | :------------- | :----- |
| 第一个 | 快捷键组合                   | `string/Array` | --     |
| 第二个 | 按下快捷键执行的回调         | `function`     | --     |
| 第三个 | 是否需要阻止浏览器默认快捷键 | `boolean`      | false  |

## 作者

- [@Lmuy](https://www.github.com/Lmuy)
