<template>
  <div class="auth-form">
    <div class="auth-form__inner">
      <div class="input-login">
        <p>Name</p>
        <LoginInput :type="'text'" v-model="login" @focus="resetWrongData" @keyup.enter="isCorrectData(login, password)" />
        <span v-if="wrongData.includes('login')">
          <img src="../../assets/images/wrong-data.svg" alt="wrong-data">Entered login is incorrect
        </span>
      </div>
      <div class="input-password">
        <p>Password</p>
        <LoginInput :type="'password'" v-model="password" @focus="resetWrongData" @keyup.enter="isCorrectData(login, password)" />
        <span v-if="wrongData.includes('password')">
          <img src="../../assets/images/wrong-data.svg" alt="wrong-data">Entered password is incorrect
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
import PrimaryButton from "@/components/UI/PrimaryButton";
import LoginInput from "@/components/UI/LoginInput";

export default {
  name: "AuthForm",
  components: {PrimaryButton, LoginInput},
  data(){
    return {
      login: '',
      password: '',
      wrongData: []
    }
  },
  methods: {
    isCorrectData(login, password) {
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
        this.$router.replace({path: '/todo'})
      }
    },
    resetWrongData(){
      this.wrongData = []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>