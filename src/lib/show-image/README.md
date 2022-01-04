# 全屏显示图片组件

基于 vue3.0+typescript 封装的全屏显示图片插件，支持拖动、放大和缩小全屏展示图片。

### 安装

```js
npm install lmuy-image-view --save
```

### 使用

```js
// main.ts
import imageView from 'lmuy-image-view'

createApp(App).use(imageView).mount('#app')

// 页面中
<lmuy-image-view
  :src="src"
  :show-picture="item.dialogVisible"
  @update:show-picture="closeImage"/>
```

### 可接收参数

| 参数                   | 说明             | 类型       | 可选值     | 默认值 |
| :--------------------- | :--------------- | :--------- | :--------- | :----- |
| `src`                  | 图片位置         | `string`   | --         | --     |
| `show-picture`         | 是否展示         | `boolean`  | true/false | --     |
| `@update:show-picture` | 关闭弹窗对应方法 | `function` | --         | --     |

## 作者

- [@Lmuy](https://www.github.com/Lmuy)

## 预览

![插件预览](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ace69f627e94e07be97ca204c7a08a1~tplv-k3u1fbpfcp-watermark.image?)
[或点击查看](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ace69f627e94e07be97ca204c7a08a1~tplv-k3u1fbpfcp-watermark.image?)
