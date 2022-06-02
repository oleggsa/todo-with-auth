<template>
  <div class="auth-form">
    <div class="auth-form__inner">
      <div class="input-login">
        <p>Name</p>
        <input type="text" v-model="login" @focus="resetWrongData">
        <span v-if="wrongData.includes('login')">
          <img src="../assets/images/wrong-data.svg" alt="wrong-data">Entered login is incorrect
        </span>
      </div>
      <div class="input-password">
        <p>Password</p>
        <input type="password" v-model="password" @focus="resetWrongData">
        <span v-if="wrongData.includes('password')">
          <img src="../assets/images/wrong-data.svg" alt="wrong-data">Entered password is incorrect
        </span>
      </div>
      <div class="auth-form__btns">
        <button class="login-btn" @click="isCorrectData(login, password)">
          LOGIN
        </button>
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
export default {
  name: "AuthForm",
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
      if(this.login !== 'Admin') {
        this.wrongData.push('login')
      }
      if(this.password !== '12345') {
        return this.wrongData.push('password')
      }
      if(!this.wrongData.length){
        alert('Success')
      }
      this.login = '';
      this.password = '';
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
  height: 464px;
  left: 56.8%;
  top: 423px;
  background: #FFFFFF;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  &__inner {
    padding: 40px 30px 0;
    .input-login,
    .input-password {
      margin-bottom: 40px;
      p {
        margin: 0 0 7px 0;
      }
      input {
        width: 100%;
        height: 53px;
        border: 1px solid #9A9A9A;
        font-size: 20px;
        padding: 15px;
      }
      span {
        margin-top: 5px;
        color: #D60000;
        img {
          margin-right: 5px;
        }
      }
    }
  }
  &__btns {
    .login-btn {
      width: 100%;
      height: 53px;
      background: $button-blue;
      font-size: 25px;
      line-height: 29px;
      color: $white;
      border: none;
      cursor: pointer;
    }
    .forgot-btn {
      width: 100%;
      font-size: 20px;
      line-height: 23px;
      margin: 20px 0 23px;
      background: none;
      border: none;
      color: #056DAE;
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
  }
}
</style>