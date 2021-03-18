<template>
  <div id="comicDetail">
    <!-- 标题 -->
    <div class="title">
      <span>动漫详情</span>
      <span class="moreInfo">
        {{ form.detail.references }}  •  {{ form.detail.hits }}次点击
      </span>
    </div>
    <el-form label-position="right" label-width="80px" :model="form.detail" class="createContent">
      <el-form-item label="动漫名称" prop="name">
        <span>{{ form.detail.name }}</span>
      </el-form-item>
      <el-form-item label="动漫评分" prop="score">
        <el-rate
          v-model="form.detail.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-form-item>
      <el-form-item label="动漫logo" prop="avatar">
        <el-avatar shape="square" :size="48" fit="fill" :src="form.detail.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="推荐理由" prop="reason">
        <span>{{ form.detail.reason }}</span>
      </el-form-item>
      <el-form-item label="观看网址" prop="website">
        <el-link href="javascript:void(0);" :underline="false" @click="watchComic">{{ form.detail.website }}</el-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="support()">支持</el-button>
        <el-button @click="opposition()">反对</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

interface detailForm {
  name: string,
  score: number,
  avatar: string,
  reason: string,
  website: string,
  references: string,
  hits: number
}

export default defineComponent({
  name: 'ComicDetail',
  components: {
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    let form = reactive({
      detail: {
        name: '',
        score: 0,
        avatar: '',
        reason: '',
        website: '',
        references: '',
        hits: 0
      }
    })

    onMounted(() => {
      methods.getDetail();

      // form.name = route.query.name as string;
      // form.score = 4.3;
      // form.avatar = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
      // form.reason = '非常不错';
      // form.website = 'https://www.baidu.com';
      // form.references = "Lmuy";
      // form.hits = 0;
    })

    const methods = {
      getDetail() {
        const detailName = route.query.name as string;
        store.dispatch('getComicDetail', detailName).then((res) => {
          form.detail = res;
        }).catch(() => {})
      },
      support() {
        router.push({ name: 'Comic' })
      },
      opposition() {
        router.push({ name: 'Comic' })
      },
      watchComic() {
        window.open(form.detail.website);
      }
    }

    return {
      router,
      route,
      form,
      store,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#comicDetail {
  height: calc(100vh - 180px);
  background: #fff;
  .title {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0,0,0,.11);
    position: relative;
    .moreInfo {
      color: #ccc;
      position: absolute;
      right: 20px;
    }
  }
  .createContent {
    width: 50%;
    position: relative;
    left: 25%;
    top: 15vh;
  }
}
</style>
