<template>
  <div
    id="dy-number"
    ref="d"
    :class="[
      type ? `var-number-color--${type}` : `var-number-color--default`,
      size ? `var-number-color--${size}` : `var-number-size--medium`
    ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  type: String,
  size: String,
  value: {
    default: 100,
    type: Number
  },
  during: {
    default: 1,
    type: Number
  }
})
const { type, size, value, during } = props
let d: Ref = ref(null)

onMounted(() => {
  numberAnimation(d.value, value, during)
})

const numberAnimation = function(dom: Element, number: number, s: number) {
  let handle: any
  let content: number = 0
  let time = number / (s * 60)
  // 利用requestAnimationFrame，每秒60帧
  // time即每一次执行需要加的大小
  let fn = () => {
    if (number - time <= content) {
      cancelAnimationFrame(handle)
      content = number
    } else {
      content += time
      handle = requestAnimationFrame(fn)
    }
    dom.innerHTML = String(parseInt(String(content)))
  }
  requestAnimationFrame(fn)
}

</script>
<style lang="scss">
@import './number.scss';
#dy-number {
  display: inline-block;
  padding: 0 8px;
  font-weight: 600;
}
</style>
