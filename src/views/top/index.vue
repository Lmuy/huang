<template>
  <div id="top">
    <el-image :src="logoUrl" fit="fill" class="logo" />
    <el-input placeholder="" size="small" prefix-icon="el-icon-search" v-model="searchName" class="searchInput" />
    <div class="right">
      <div v-if="isLogin">
        <el-button type="text" size="dedium">设置</el-button>
        <el-button type="text" size="dedium">登出</el-button>
      </div>
      <div v-else>
        <el-button type="text" size="dedium" @click="register">注册</el-button>
        <el-button type="text" size="dedium" @click="login">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Top',
  components: {
  },
  setup() {
    const logoUrl = require('@assets/logo.png');
    const searchName = ''
    const isLogin = false;
    const router = useRouter();

    const methods = {
      register() {
        router.push({ name: 'Register' })
      },
      login() {
        router.push({ name: 'Login' })
      }
    };

    return {
      logoUrl,
      searchName,
      isLogin,
      ...methods
    }
  }
});
</script>
<style lang="scss" rel="stylesheet/scss">
#top {
  // width: 60vw;
  height: 44px;
  background-color: #fff;
  font-size: 15px;
  border-bottom: 1px solid rgba(0,0,0,.22);
  padding: 0 20vw;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    display: inline-block;
    height: 30px;
    width: 30px;
  }
  .searchInput {
    width: 280px;
    margin-left: 16px;

  }
  .right {
    position: absolute;
    right: 20vw;
  }
}
</style>
<style>
#top .searchInput .el-input__inner {
  background-color: #fafafa;
  border-color: #fff;
  border-radius: 16px;
}
#top .searchInput .el-input__inner:focus {
  border-color: #a6a6b0;
}
</style>