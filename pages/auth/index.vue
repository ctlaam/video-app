<template>
  <div id="signup" class="d-flex justify-content-center">
    <div class="auth-container">
      <div class="header text-center mb-5">
        <img src="../../assets/logo/logo.png" alt="" />
      </div>
      <div class="main">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập tên tài khoản !',
                    },
                  ],
                },
              ]"
              placeholder="Tên tài khoản"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Vui lòng nhập mật khẩu !' },
                  ],
                },
              ]"
              type="password"
              placeholder="Mật khẩu"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              Nhớ tài khoản
            </a-checkbox>
            <a class="login-form-forgot" href=""> Quên mật khẩu </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Đăng nhập
            </a-button>
            Hoặc
            <a href=""> Đăng ký! </a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from "../../api/auth.js";
import Cookies from "js-cookie";
export default {
  layout: "account",
  data() {
    return {
      username: null,
      password: null,
      password2: null,
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    singUp() {
      this.$router.push("/auth/signup");
    },
  },
};
</script>

<style lang="scss">
#signup {
  color: #d0d2d6 !important;
  width: 100%;
  background: rgb(255, 228, 202);
  background: linear-gradient(
    90deg,
    rgba(255, 228, 202, 1) 4%,
    rgba(236, 178, 255, 1) 100%
  );
  height: 100vh;
  .auth-container {
    padding: 5rem;
    background-image: url("../../assets/logo/background.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 45%;
    background-color: red;
    .header {
      img {
        border-radius: 50%;
      }
    }
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
}
</style>
