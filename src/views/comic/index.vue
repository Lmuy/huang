<template>
  <div id="comic">
    <el-scrollbar style="height:100%;">
      <div v-for="(item, index) in tableData" :key="index" class="comicItem">
        <!-- 左侧头像 -->
        <div class="avatar">
          <el-avatar shape="square" :size="48" fit="fill" :src="item.url"></el-avatar>
        </div>
        <!-- 右侧信息 -->
        <div class="comicInfo">
          <!-- 右上侧标题 -->
          <div class="infoTitle">
            <el-link :underline="false">{{ item.name }}</el-link>
          </div>
          <!-- 右下侧其它信息 -->
          <div class="moreInfo">
            <span>推荐指数:{{ item.score }}</span>
            <span>{{ item.references }}</span>
            <span>{{ item.createTime }}</span>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

type comicItem = {
  name: string, // 动漫名称
  references: string, // 推荐人昵称
  avatar: String, // 推荐人头像
  createTime: Date, // 推荐时间
  score: number, // 分数
}

export default defineComponent({
  name: 'Comic',
  components: {
  },
  setup(props) {
    const loading = ref(false);
    let tableData: comicItem[] = [];

    onMounted(() => {
      tableData = [{
        name: '进击的巨人',
        references: 'Lmuy',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        createTime: new Date(),
        score: 4.3
      }]
    })

    return {
      loading,
      tableData
    }
  }
});
</script>
<style lang="scss">
#comic {
  height: calc(100vh - 180px);
  .comicItem {
    height: 70px;
    padding: 10px;
    .avatar {
      display: inline-block;
    }
    .comicInfo {
      display: inline-block;
      margin-left: 10px;
      .infoTitle {

      }
      .moreInfo {

      }
    }
  }
}
</style>
