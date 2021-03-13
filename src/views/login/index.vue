<template>
  <div id="login">
    <div class="title">
      登陆账号
    </div>
    <el-form :rules="rules" ref="loginForm" label-position="right" label-width="80px" :model="form" class="loginContent">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">立即登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
interface ModelForm {
  username: string,
  password: string
}

export default defineComponent({
  name: 'Login',
  components: {
  },
  setup(props) {
    const loginForm = ref();
    const rules = reactive({
      username: [{ required: true, message: '帐号不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
    });
    const router = useRouter();
    const form: ModelForm = reactive<ModelForm >({
      username: '',
      password: ''
    })

    const login = () => {
      loginForm.value.validate((valid: boolean) => {
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
      loginForm,
      ...methods,
      login,
    }
  }
});
</script>
<style lang="scss">
#login {
  height: calc(100vh - 130px);
  background-color: #ffffff;
  .title {
    height: 44px;
    line-height: 44px;
    padding-left: 18px;
    border-bottom: 1px solid rgba(0,0,0,.22);
  }
  .loginContent {
    width: 50%;
    position: relative;
    left: 25%;
    top: 20vh;
  }
}
</style>
