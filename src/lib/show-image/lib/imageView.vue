<template>
  <div class="picview">
    <el-dialog
      v-model="picture"
      :close-on-click-modal="false"
      :fullscreen="true"
      custom-class="picture"
    >
      <div v-loading.fullscreen.lock="loading" ref="myPic" class="main" @click="close($event)">
        <img
          v-show="isPicShow"
          :src="src"
          :width="picW"
          :height="picH"
          :style="{ transform: picTransform, top: picTop ,left:picLeft }"
          @load="scalePic"
          @error="setImgError"
          @mousedown.prevent="mousedown($event)"
          @mousemove.prevent="mousemove($event)"
          @mouseup.prevent="mouseup($event)"
        >
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { defineEmit, ref, watch, toRefs } from 'vue'
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  showPicture: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmit(['update:showPicture'])

const { showPicture } = toRefs(props)

const loading = ref(false)
const picture = ref(false)
const picW = ref(0)
const picH = ref(0)
const isPicShow = ref(false)
const picTransform = ref('')
const picTop = ref('')
const picLeft = ref('')
let scale = 1,
  roted = 0,
  isMoving = false,
  disX = 0,
  disY = 0

const myPic: Ref = ref(null)

watch(showPicture, (newVal, oldVal) => {
  picture.value = newVal;
})


const scalePic = function() {
  loading.value = false;
  scale = 1;
  roted = 0;
  picTransform.value = 'scale(1)';
  countImg();
  window.onresize = function() {
    countImg();
  };
  document.body.onmousewheel = function(event: any) {
    event = event || window.event;
    if (picture.value === true) {
      if (event.deltaY > 0) {
        scale = scale > 0.2 ? scale - 0.1 : scale;
      } else {
        scale += 0.1;
      }
      picTransform.value = `scale(${scale}) rotate(${roted}deg)`
    }
  };
}
const rotePic = function() {
  roted = Number(roted) + 90;
  picTransform.value = `scale(${scale}) rotate(${roted}deg)`
}
const close = function(e: any) {
  if (e.target === myPic.value.childNodes[0]) {
    return;
  }
  //
  emit('update:showPicture', false);
  // showPicture.value = false
  e.stopPropagation();
}
const mousedown = function(e: any) {
  let oDiv = myPic.value.childNodes[0];
  isMoving = true;
  disX = e.clientX - oDiv.offsetLeft;
  disY = e.clientY - oDiv.offsetTop;
}
const mousemove = function(e) {
  if (
    isMoving &&
    e.clientY > 0 &&
    e.clientY < myPic.value.clientHeight &&
    e.clientX > 0 &&
    e.clientX < myPic.value.clientWidth
  ) {
    picTop.value = e.clientY - disY + 'px';
    picLeft.value = e.clientX - disX + 'px';
  }
}
const mouseup = function() {
  isMoving = false;
  return false;
}
const countImg = function() {
  const cpicW = myPic.value.childNodes[0].naturalWidth;
  const cpicH = myPic.value.childNodes[0].naturalHeight;
  let Width = myPic.value.offsetWidth;
  let Height = myPic.value.offsetHeight;
  if (Width / Height <= cpicW / cpicH) {
    if (Width > cpicW) {
      Width = cpicW;
    }
    picW.value = Width;
    picH.value = (Number(cpicH) * Width) / Number(cpicW);
    picTop.value = `${(Height - picH.value) / 2}px`;
    picLeft.value = `${(myPic.value.offsetWidth - picW.value) / 2}px`;
    isPicShow.value = true;
  } else {
    if (Height > cpicH) {
      Height = cpicW;
    }
    picH.value = Height;
    picW.value = (Number(cpicW) * Height) / Number(cpicH);
    picLeft.value = `${(Width - picW.value) / 2}px`;
    picTop.value = `${(myPic.value.offsetHeight - picH.value) / 2}px`;
    isPicShow.value = true;
  }
}
const setImgError = function() {
  loading.value = false;
}
</script>
<style lang="scss">
.picview {
  user-select: none;
}
a {
  display: inline-block;
}
a img {
  width: 100%;
  height: 100%;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
.main {
  width: 100%;
  height: 100%;
}
.main img {
  position: absolute;
  cursor: all-scroll;
}
.picture {
  background: transparent;
  overflow: hidden;
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    height: 100%;
    width: 100%;
    padding: 0;
  }
}
</style>
