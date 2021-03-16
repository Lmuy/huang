<template>
  <div id="comic">
    <el-scrollbar style="height:100%;">
      <div v-for="(item, index) in tableData" :key="index" class="comicItem">
        <!-- 左侧头像 -->
        <div class="avatar">
          <el-avatar shape="square" :size="48" fit="fill" :src="item.avatar"></el-avatar>
        </div>
        <!-- 右侧信息 -->
        <div class="comicInfo">
          <!-- 右上侧标题 -->
          <div class="infoTitle">
            <el-link href="javascript:void(0);" :underline="false" @click="detail(item)">{{ item.name }}</el-link>
          </div>
          <!-- 右下侧其它信息 -->
          <div class="moreInfo">
            <span>推荐指数:{{ item.score }}</span>
            <span class="unImportantInfo">  •  {{ item.references }}  •  </span>
            <span class="unImportantInfo">{{ item.createTime }}</span>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue';
import { formatDate } from '@/utils/format';
import { useRouter } from 'vue-router';

type comicItem = {
  name: string, // 动漫名称
  references: string, // 推荐人昵称
  avatar: string, // 推荐人头像
  createTime: string, // 推荐时间
  score: number, // 分数
}

export default defineComponent({
  name: 'Comic',
  components: {
  },
  setup(props) {
    const loading = ref(false);
    let tableData: comicItem[] = reactive([]);
    const router = useRouter();

    onMounted(() => {
      tableData.push({
        name: '进击的巨人',
        references: 'Lmuy',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        createTime: formatDate(new Date()),
        score: 4.3
      }, {
        name: '转生成史莱姆这档事',
        references: 'Lmuy',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        createTime: formatDate(new Date()),
        score: 4.2
      }, {
        name: '斗罗大陆',
        references: 'Lmuy',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        createTime: formatDate(new Date()),
        score: 4.0
      }, {
        name: '刺客五六七',
        references: 'Lmuy',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        createTime: formatDate(new Date()),
        score: 4.2
      })
    })

    const methods = {
      detail(item: comicItem) {
        router.push({ name: 'ComicDetail', query: { name: item.name } })
      }
    }

    return {
      loading,
      tableData,
      router,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#comic {
  height: calc(100vh - 180px);
  .comicItem {
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.11);
    display: flex;
    align-items: center;
    .avatar {
      display: inline-block;
    }
    .comicInfo {
      display: inline-block;
      margin-left: 10px;
      .infoTitle {

      }
      .moreInfo {
        margin-top: 10px;
        .unImportantInfo {
          color: #ccc;
        }
      }
    }
  }
}
</style>
