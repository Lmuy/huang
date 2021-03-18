<template>
  <div id="register">
    <div class="title">
      注册账号
    </div>
    <el-form :rules="rules" ref="registerForm" label-position="right" label-width="80px" :model="form" class="registerContent">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register()">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
interface ModelForm {
  username: string,
  password: string,
  phone: string
}

export default defineComponent({
  name: 'Register',
  components: {
  },
  setup(props) {
    const registerForm = ref();
    const rules = reactive({
      username: [{ required: true, message: '帐号不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
    });
    const router = useRouter();
    const store = useStore();
    const form: ModelForm = reactive<ModelForm >({
      username: '',
      password: '',
      phone: ''
    })

    const register = () => {
      registerForm.value.validate((valid: boolean) => {
        if (valid) {
          store.dispatch('register', form).then((res) => {
            ElMessage({
              showClose: true,
              message: `恭喜你，注册成功`,
              type: 'success'
            });
            router.push({ name: 'Comic' })
          }).catch(() => {})
        }
      });
    }


    const methods = {
      
    }

    return {
      rules,
      form,
      store,
      registerForm,
      ...methods,
      register,
    }
  }
});
</script>
<style lang="scss">
#register {
  height: calc(100vh - 130px);
  background-color: #ffffff;
  .title {
    height: 44px;
    line-height: 44px;
    padding-left: 18px;
    border-bottom: 1px solid rgba(0,0,0,.22);
  }
  .registerContent {
    width: 50%;
    position: relative;
    left: 25%;
    top: 20vh;
  }
}
</style>
