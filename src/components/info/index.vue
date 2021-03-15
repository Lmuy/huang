<template>
  <div id="info">
    <!-- 头像+昵称 -->
    <div class="userInfo">
      <!-- 左侧头像 -->
      <div class="avatar">
        <el-avatar shape="square" :size="48" fit="fill" :src="userInfo.avatar"></el-avatar>
      </div>
      <!-- 右侧信息 -->
      <div class="username">
        <el-link :underline="false">{{ userInfo.references }}</el-link>
      </div>
    </div>
    <!-- 创作主题 -->
    <div class="creatTheme">
      <i class="el-icon-edit"></i>
      <el-link :underline="false" style="margin-left:8px;" @click="creareTheme">创作新主题</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent, onMounted, reactive } from 'vue';

interface user {
  username: string, // 账号
  references: string, // 昵称
  avatar: string, // 头像地址
}

export default defineComponent({
  name: 'Info',
  components: {
  },
  setup(props) {
    const userInfo: user = reactive({
      username: '',
      references: '',
      avatar: ''
    })
    const router = useRouter()

    onMounted(() => {
      userInfo.username = 'Lmuy';
      userInfo.references = 'Lmuy';
      userInfo.avatar = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    })

    const methods = {
      creareTheme(e: any) {
        e.preventDefault();
        router.push({ name: 'AddComic' })
      }
    }

    return {
      userInfo,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#info {
  .userInfo {
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.11);
    display: flex;
    align-items: center;
    .avatar {
      display: inline-block;
    }
    .username {
      display: inline-block;
      margin-left: 18px;
    }
  }
  .creatTheme {
    padding: 8px;
    border-bottom: 1px solid rgba(0,0,0,.11);
    height: 32px;
    line-height: 32px;
  }
}
</style>
