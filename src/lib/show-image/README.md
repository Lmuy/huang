# 全屏显示图片组件

基于 vue3.0+typescript 封装的全屏显示图片插件，支持放大和缩小全屏展示图片。

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
<dy-number type="warning" :value="value"/>
```

### 可接收参数

| 参数     | 说明         | 类型     | 可选值                              | 默认值 |
| :------- | :----------- | :------- | :---------------------------------- | :----- |
| `type`   | 类型         | `string` | primary/success/warning/danger/info | --     |
| `size`   | 尺寸         | `string` | medium/small/mini                   | --     |
| `value`  | 内容         | `number` | 数字                                | 100    |
| `during` | 动画持续时间 | number   | 数字                                | 0.5    |

## 作者

- [@Lmuy](https://www.github.com/Lmuy)

## 预览

![插件预览](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ef2ee2275874fcb80429082cccf4374~tplv-k3u1fbpfcp-watermark.image?)
