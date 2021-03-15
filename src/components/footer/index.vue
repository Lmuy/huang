<template>
  <div id="footer">
    动漫爱好者的乐园
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  components: {
  },
  setup() {
    const logoUrl = require('@/assets/logo.png');
    const searchName = ''
    const isLogin = true;

    return {
      logoUrl,
      searchName,
      isLogin
    }
  }
});
</script>
<style lang="scss" rel="stylesheet/scss">
#footer {
  // width: 60vw;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  font-size: 15px;
  border-top: 1px solid rgba(0,0,0,.22);
  padding: 0 20vw;
  color: #999;
}
</style>