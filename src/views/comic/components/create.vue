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
      <el-form-item label="动漫评分" prop="score">
        <el-input v-model="form.score"></el-input>
      </el-form-item>
      <el-form-item label="动漫logo" prop="avatar">
        <el-input v-model="form.avatar"></el-input>
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
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

interface recommendForm {
  name: string,
  score: string,
  avatar: string,
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
      score: [{ required: true, message: '评分不能为空', trigger: 'blur' }],
      avatar: [{ required: true, message: 'logo不能为空', trigger: 'blur' }]
    });
    const router = useRouter();
    const store = useStore();
    const form: recommendForm = reactive<recommendForm >({
      name: '',
      score: '',
      avatar: '',
      reason: '',
      website: ''
    })
    
    const methods = {
      create() {
        createForm.value.validate((valid: boolean) => {
          if (valid) {
            store.dispatch('getComicDetail', form).then((res) => {
              ElMessage({
                showClose: true,
                message: `恭喜你，${form.name}推荐成功`,
                type: 'success'
              });
              router.push({ name: 'Comic' })
            }).catch(() => {})
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
  background: #fff;
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
