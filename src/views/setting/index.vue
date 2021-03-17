<template>
  <div id="setting">
    <div class="title">
      个人设置
    </div>
    <el-form :rules="rules" ref="settingForm" label-position="right" label-width="80px" :model="form" class="settingContent">
      <el-form-item label="昵称" prop="references">
        <el-input v-model="form.references"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="setting()">立即保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
interface ModelForm {
  references: string,
  password: string
}

export default defineComponent({
  name: 'Setting',
  components: {
  },
  setup(props) {
    const settingForm = ref();
    const rules = reactive({
      references: [{ required: true, message: '昵称不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
    });
    const router = useRouter();
    const form: ModelForm = reactive<ModelForm >({
      references: '',
      password: ''
    })

    const setting = () => {
      settingForm.value.validate((valid: boolean) => {
        if (valid) {
          router.push({ name: 'Comic' })
        }
      });
    }


    const methods = {
      
    }

    return {
      rules,
      form,
      settingForm,
      ...methods,
      setting,
    }
  }
});
</script>
<style lang="scss">
#setting {
  height: calc(100vh - 130px);
  background-color: #ffffff;
  .title {
    height: 44px;
    line-height: 44px;
    padding-left: 18px;
    border-bottom: 1px solid rgba(0,0,0,.22);
  }
  .settingContent {
    width: 50%;
    position: relative;
    left: 25%;
    top: 20vh;
  }
}
</style>
