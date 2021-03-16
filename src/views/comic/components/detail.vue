<template>
  <div id="comicDetail">
    <!-- 标题 -->
    <div class="title">
      动漫详情
    </div>
    <el-form label-position="right" label-width="80px" :model="form" class="createContent">
      <el-form-item label="动漫名称" prop="name">
        <span>{{ form.name }}</span>
      </el-form-item>
      <el-form-item label="动漫评分" prop="rate">
        <el-rate
          v-model="form.rate"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-form-item>
      <el-form-item label="动漫logo" prop="logo">
        <el-avatar shape="square" :size="48" fit="fill" :src="form.logo"></el-avatar>
      </el-form-item>
      <el-form-item label="推荐理由" prop="reason">
        <span>{{ form.reason }}</span>
      </el-form-item>
      <el-form-item label="观看网址" prop="website">
        <el-link href="javascript:void(0);" :underline="false" @click="watchComic">{{ form.website }}</el-link>
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
import { useRouter, useRoute } from 'vue-router';

interface detailForm {
  name: string,
  rate: number,
  logo: string,
  reason: string,
  website: string
}

export default defineComponent({
  name: 'ComicDetail',
  components: {
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    let form: detailForm = reactive<detailForm >({
      name: '',
      rate: 0,
      logo: '',
      reason: '',
      website: ''
    })

    onMounted(() => {
      form.name = route.query.name as string;
      form.rate = 4.3;
      form.logo = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
      form.reason = '非常不错';
      form.website = 'https://www.baidu.com';
    })

    const methods = {
      support() {
        router.push({ name: 'Comic' })
      },
      opposition() {
        router.push({ name: 'Comic' })
      },
      watchComic() {
        window.open(form.website);
      }
    }

    return {
      router,
      route,
      form,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#comicDetail {
  height: calc(100vh - 180px);
  .title {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0,0,0,.11);
  }
  .createContent {
    width: 50%;
    position: relative;
    left: 25%;
    top: 15vh;
  }
}
</style>
