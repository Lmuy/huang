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
            <span ref="a">推荐指数:<dy-number type="success" :value="item.score*10"/></span>
            <span class="unImportantInfo">  •  {{ item.references }}  •  </span>
            <span class="unImportantInfo">{{ item.createTime }}</span>
            
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, watch } from 'vue';
import { formatDate } from '@/utils/format';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { ShortCut } from '@/lib/shortcut-key'


type ComicItem = {
  name: string, // 动漫名称
  references: string, // 推荐人昵称
  avatar: string, // 推荐人头像
  createTime: string, // 推荐时间
  score: number, // 分数
}
interface ISearch {
  globalName: string,
  orderBy: string,
  ascending: boolean,
  pageSize: number,
  pageNo: number
}

export default defineComponent({
  name: 'Comic',
  components: {
  },
  setup(props) {
    const loading = ref(false);
    let tableData = ref([{
        name: '进击的巨人',
        references: 'Lmuy',
        avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        createTime: formatDate(new Date()),
        score: 4.3
      }]);
    const router = useRouter();
    const store = useStore();
    let searchData: ISearch = {
      globalName: '',
      orderBy: '',
      ascending: true,
      pageSize: 10,
      pageNo: 1
    }
    let a: Ref = ref(null)
    
    onMounted(() => {
      // methods.search();
      // function join<T, U>(first: T, second: U) {
      //   return `${first}${second}`
      // }
      // join <number, string> (1, '2')
      a.value.style.color = 'red'

      ShortCut.bind('M+D', (res: any) => {
        console.log(res)
      })
      ShortCut.bind('ALT', (res: any) => {
        console.log(res)
      })
    })

    watch(() => store.state.comic.globalName, (val, old) => {
      searchData.globalName = val;
      methods.search();
    })

    const methods: IMethods = {
      detail(item: ComicItem) {
        router.push({ name: 'ComicDetail', query: { name: item.name } })
      },
      // 获取列表
      search() {
        console.log(this)
        store.dispatch('getComicList', searchData).then((res) => {
          tableData.value = res;
        }).catch(() => {})
      }
    }

    return {
      a,
      loading,
      tableData,
      router,
      store,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#comic {
  height: calc(100vh - 180px);
  background: #fff;
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
