<template>
  <div class="login">
    <Header />
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
        <AuthForm />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import DataMixin from "@/mixin/DataMixin";
export default {
  name: "LoginPage",
  components: {AuthForm, Footer, Header},
  mixins: [DataMixin]
}
</script>

<style lang="scss" scoped>
@import "style";
</style>