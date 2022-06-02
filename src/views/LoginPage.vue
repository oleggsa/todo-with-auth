<template>
  <div class="login">
    <Header />
    <AuthForm />
    <div class="login__inner">
      <div class="container">
        <div class="login__left">
          <h1 class="header">Welcome to <br>Business Analytics Online</h1>
          <div class="login__body">
            <div class="description"><span>Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</div>
            <div class="login__list" v-for="item in bodyList" :key="bodyList[item]">
              <div class="title">{{item.title}}</div>
              <div class="description" v-html="item.description">{{item.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
export default {
  name: "LoginPage",
  components: {AuthForm, Footer, Header},
  data() {
    return {
      bodyList: [
        {
          title: 'Interactive Reporting',
          description: 'In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), <br> E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.',
        },
        {
          title: 'Automated data updates',
          description: 'The application automatically updates and structures the data in just 60 seconds, saving you time and money.',
        },
        {
          title: 'Data Security',
          description: 'The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";


.login {
  &__inner {
    background-image: url("../assets/images/background-login.png");
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 1920px 457px;
  }
  &__left {
    max-width: 680px;
    .header {
      font-size: 55px;
      font-weight: 400;
      line-height: 86.18px;
      color: $white;
      margin: 0 0 118px 0;
      padding: 215px 0 0 0;
    }
  }
  &__body {
    padding-left: 8px;
    .description {
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 23px;
      span {
        font-weight: 500;
      }
    }
    .login__list {
      padding-left: 40px;
      .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        color: $main-grey;
        margin-bottom: 10px;
        position: relative;
        &:before {
          content: url("../assets/images/check.svg");
          position: absolute;
          left: -40px;

        }
      }
      .description {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 15px;
      }
    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
}
</style>