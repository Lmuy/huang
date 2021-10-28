<template>
  <div id="novel">
    <el-scrollbar style="height:100%;" v-loading="loading">
      <audio id="musicPlay" :src="musicUrl" controls="controls">
        您的浏览器不支持 audio 标签。
      </audio>
      <div v-for="(item, index) in tableData.list" :key="index" class="musicItem">
        <!-- 左侧音乐头像 -->
        <div class="avatar">
          <el-avatar shape="circle" :size="48" fit="fill" :src="item.avatar" @click="playMusic(item)"></el-avatar>
        </div>
        <!-- 右侧信息 -->
        <div class="comicInfo">
          <!-- 右上侧标题 -->
          <div class="infoTitle">
            <el-link href="javascript:void(0);" :underline="false" >{{ item.name }}</el-link>
          </div>
          <!-- 右下侧其它信息 -->
          <div class="moreInfo">
            <span>推荐指数:{{ item.score }}</span>
            <span class="unImportantInfo">  •  {{ item.singer }}</span>
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
import { getMusicList } from '@/api/novelApi'

interface musicItem {
  name: string, // 歌曲名称
  singer: string, // 歌手名称
  avatar: string, // 歌曲logo
  url: string, // 外链地址
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
  name: 'Novel',
  components: {
  },
  setup(props) {
    let loading = ref(false);
    let play = ref(false);
    let musicUrl = ref('')
    let tableData = reactive<{ list: musicItem[] }>({
      list: []
    });
    const router = useRouter();
    const store = useStore();
    let searchData: ISearch = {
      globalName: '',
      orderBy: '',
      ascending: true,
      pageSize: 10,
      pageNo: 1
    }

    onMounted(() => {
      methods.search();
    })

    const methods = {
      playMusic(item: musicItem) {
        play.value = !play.value
        let music = <HTMLAudioElement> document.getElementById('musicPlay')

        // 播放另一首
        if (musicUrl.value !== item.url) {
          musicUrl.value = item.url
          setTimeout(() => {
            music.play()
          }, 200)
        } else {
          // 继续播放
          if (music.paused) {
            music.play()
          } else {
            music.pause()
          }
        }
      },
      // 获取列表
      search() {
        loading.value = true
        getMusicList(searchData).then((res:any) => {
          loading.value = false
          tableData.list = res.data.data.list;
        }).catch(() => {
          loading.value = false
        })
      }
    }

    return {
      loading,
      tableData,
      musicUrl,
      router,
      store,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#novel {
  height: calc(100vh - 180px);
  background: #fff;
  .musicItem {
    height: 60px;
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,.11);
    display: flex;
    align-items: center;
    .avatar {
      display: inline-block;
      cursor: pointer;
      &:hover {
        transform: rotate(30turn);
        transition-delay: 1s;
        transition-property: all;
        transition-duration: 59s;
        transition-timing-function: cubic-bezier(.34,0,.84,1);
      }
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