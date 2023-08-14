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
          <a-form-item v-bind="formItemLayout" has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng xác nhận lại mật khẩu!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              type="password"
              @blur="handleConfirmBlur"
              placeholder="Nhập lại mật khẩu"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
            /></a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" has-feedback>
            <a-input
              v-decorator="['code']"
              type="password"
              placeholder="Nhập mã giới thiệu (nếu có)"
            >
              <a-icon
                slot="prefix"
                type="code"
                style="color: rgba(0, 0, 0, 0.25)"
            /></a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Đăng ký
            </a-button>
            Hoặc
            <a href=""> Đăng nhập ngay ! </a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from "../../api/auth.js";
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
    singIn() {
      this.$router.push("/auth");
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Mật khẩu nhập lại không đúng !");
      } else {
        callback();
      }
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
    background-image: url("../../assets/logo/background.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5rem;
    width: 40%;
    // background-color: yellow;
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
