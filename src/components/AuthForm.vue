<template>
  <div class="auth-form">
    <div class="auth-form__inner">
      <div class="input-login">
        <p>Name</p>
        <input type="text" v-model="login" @focus="resetWrongData" @keyup.enter="isCorrectData(login, password)">
        <span v-if="wrongData.includes('login')">
          <img src="../assets/images/wrong-data.svg" alt="wrong-data">Entered login is incorrect
        </span>
      </div>
      <div class="input-password">
        <p>Password</p>
        <input type="password" v-model="password" @focus="resetWrongData" @keyup.enter="isCorrectData(login, password)">
        <span v-if="wrongData.includes('password')">
          <img src="../assets/images/wrong-data.svg" alt="wrong-data">Entered password is incorrect
        </span>
      </div>
      <div class="auth-form__btns">
        <primary-button @click.native="isCorrectData(login, password)">LOGIN</primary-button>
        <button class="forgot-btn">
          Forgot Password
        </button>
      </div>
    </div>
    <button class="register-btn">
      Register now
    </button>
  </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "AuthForm",
  components: {PrimaryButton},
  data(){
    return {
      login: '',
      password: '',
      wrongData: []
    }
  },
  methods: {
    isCorrectData(login, password) {
      console.log('works', login, password)
      if(this.login === '' || this.password === ''){
        return;
      }
      if(this.login !== 'Admin') {
        this.wrongData.push('login')
      }
      if(this.password !== '12345') {
        return this.wrongData.push('password')
      }
      if(!this.wrongData.length){
        const data = {
          name: this.login,
          isAuth: true
        }
        localStorage.user = JSON.stringify(data)
        this.$router.push('todo')
      }
    },
    resetWrongData(){
      this.wrongData = []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";

.auth-form {
  position: absolute;
  width: 481px;
  left: calc(50% + 118px);
  top: 423px;
  background: #FFFFFF;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  @include _1250 {
    left: auto;
    right: 20px;
  }
  @include _1200 {
    position: static;
    margin: 0 auto 30px;
    @include _592 {
      width: 100%;
    }
  }
  &__inner {
    padding: 40px 30px 0;
    @include _592 {
      padding: 20px 20px 0;
    }
    .input-login,
    .input-password {
      margin-bottom: 40px;
      @include _592 {
        margin-bottom: 15px;
      }
      p {
        margin: 0 0 7px 0;
      }
      input {
        width: 100%;
        height: 53px;
        border: 1px solid #9A9A9A;
        font-size: 20px;
        padding: 15px;
        @include _592 {
          padding: 10px;
          height: 40px;
          font-size: 14px;
        }
      }
      span {
        margin-top: 5px;
        color: #D60000;
        @include _592 {
          font-size: 13px;
        }
        img {
          margin-right: 5px;
        }
      }
    }
  }
  &__btns {
    .forgot-btn {
      width: 100%;
      font-size: 20px;
      line-height: 23px;
      margin: 20px 0 23px;
      background: none;
      border: none;
      color: #056DAE;
      @include _592 {
        margin: 10px 0;
      }
    }
  }
  .register-btn {
    font-size: 25px;
    line-height: 29px;
    color: $main-grey;
    width: 100%;
    background: #F6F6F6;
    border: none;
    padding: 18px 0;
    @include _592 {
      font-size: 20px;
      padding: 10px 0;
    }
  }
  .login-btn {
    @include _592 {
      margin-top: 10px;
      height: 45px;
    }
  }
}
</style>