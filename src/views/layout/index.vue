<template>
  <div id="layout">
    <!-- top头部 -->
    <Top />
    <!-- middle中部 -->
    <div class="middle">
      <div class="listContent">
        <Menu />
        <router-view></router-view>
      </div>
      <div class="info">
        个人信息
      </div>
    </div>
    <!-- footer底部 -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Top from '@views/top/index.vue'
import Footer from '@views/footer/index.vue'
import Menu from '@views/menu/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Top,
    Footer,
    Menu
  },
});
</script>

<style lang="scss" rel="stylesheet/scss">
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .middle {
    background-color: #e2e2e2;
    height: calc(100vh - 130px);
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    padding-left: 20vw;
    padding-right: 20vw;
    .listContent {
      width: 45vw;
      background-color: #ffffff;
      border: 1px solid #e2e2e2;
    }
    .info {
      position: absolute;
      right: 20vw;
      top: 20px;
      margin-left: 18px;
      background-color: #ffffff;
      border: 1px solid #e2e2e2;
      width: calc(15vw - 45px);
      height: calc(100vh - 130px);
    }
  }
}
</style>