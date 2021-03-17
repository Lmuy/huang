<template>
  <div id="menu">
    <el-menu
      :default-active="route.title ? 'route.title' : 'Comic'"
      class="el-menu-demo"
      mode="horizontal">
      <el-menu-item index="Comic" @click="handlePath('Comic')">动漫</el-menu-item>
      <el-menu-item index="VarietyShow" @click="handlePath('VarietyShow')">综艺</el-menu-item>
      <el-menu-item index="Movies" @click="handlePath('Movies')">影视</el-menu-item>
      <el-menu-item index="Novel" @click="handlePath('Novel')">小说</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Menu',
  components: {
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    
    // 路由跳转
    const handlePath = (item: string) => {
      router.push({ name: item })
    }

    return {
      router,
      route,
      handlePath
    }
  }
});
</script>
<style lang="scss">
#menu {
  
}
</style>
<style>
#menu .el-menu-item {
  height: 48px;
  line-height: 48px;
}
</style>