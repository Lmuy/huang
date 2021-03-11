<template>
  <div id="layout">
    <!-- top头部 -->
    <Top />
    <!-- middle中部 -->
    <router-view></router-view>
    <!-- footer底部 -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Top from '@views/top/index.vue'
import Footer from '@views/footer/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Top,
    Footer
  },
});
</script>

<style lang="scss" rel="stylesheet/scss">
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>