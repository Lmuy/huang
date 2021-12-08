# 动态数字显示组件

基于 vue3.0+typescript 封装的动态数字插件，动态变化到目标数字突出显示数字内容。

### 安装

```js
npm i dy-lmuy-number -save
```

### 使用

```js
// main.ts
import dyNumber from 'dy-lmuy-number'

createApp(App).use(dyNumber).mount('#app')

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

## Authors

- [@Lmuy](https://www.github.com/Lmuy)
