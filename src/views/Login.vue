<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-title">
        <p class="text">登录到：</p>
        <p class="title">南明区花果园VR智慧社区管理平台</p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="账号">
            <el-button slot="prepend" icon="iconfont icon-user-name"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="iconfont icon-password"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "123123"
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", this.ruleForm.username);
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.login-wrapper {
  background: url(../assets/images/login-bg.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 4.2rem;
    height: 4.6rem;
    background: url(../assets/images/login-input-bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .login-title .text {
    font-size: 0.36rem;
    color: #fff;
    text-align: left;
    margin: 0.36rem 0.36rem 0.16rem;
  }
  .login-title .title {
    font-size: 0.22rem;
    color: #fff;
    text-align: left;
    margin: 0 0.36rem 0.36rem;
  }
  .login-form {
    font-size: 0.3rem;
    padding: 0 0.36rem;
  }
  .login-btn button {
    width: 100%;
  }
}
</style>
