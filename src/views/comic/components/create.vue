<template>
  <div id="addComic">
    <!-- 标题 -->
    <div class="title">
      动漫推荐
    </div>
    <el-form :rules="rules" ref="createForm" label-position="right" label-width="80px" :model="form" class="createContent">
      <el-form-item label="动漫名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="动漫评分" prop="rate">
        <el-input v-model="form.rate"></el-input>
      </el-form-item>
      <el-form-item label="动漫logo" prop="logo">
        <el-input v-model="form.logo"></el-input>
      </el-form-item>
      <el-form-item label="推荐理由" prop="reason">
        <el-input v-model="form.reason"></el-input>
      </el-form-item>
      <el-form-item label="观看网址" prop="website">
        <el-input v-model="form.website"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="create()">发布我的推荐</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

interface recommendForm {
  name: string,
  rate: string,
  logo: string,
  reason: string,
  website: string
}

export default defineComponent({
  name: 'AddComic',
  components: {
  },
  setup(props) {
    const createForm = ref();
    const rules = reactive({
      name: [{ required: true, message: '名称不能为空', trigger: 'blur' }],
      rate: [{ required: true, message: '评分不能为空', trigger: 'blur' }],
      logo: [{ required: true, message: 'logo不能为空', trigger: 'blur' }]
    });
    const router = useRouter();
    const form: recommendForm = reactive<recommendForm >({
      name: '',
      rate: '',
      logo: '',
      reason: '',
      website: ''
    })
    
    const methods = {
      create() {
        createForm.value.validate((valid: boolean) => {
          if (valid) {
            router.push({ name: 'Comic' })
          }
        });
      }
    }

    return {
      createForm,
      rules,
      router,
      form,
      ...methods,
    }
  }
});
</script>
<style lang="scss">
#addComic {
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
