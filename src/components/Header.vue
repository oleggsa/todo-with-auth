<template>
  <div class="header">
    <div class="header-upper"></div>
    <div class="header-lower">
      <div class="container">
        <img src="../../src/assets/images/logo-header.svg" alt="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables";
@import "./src/assets/styles/mixin";

.header {
  &-upper {
    width: 100%;
    height: 53px;
    background: $main_grey;
    @include _1024 {
      height: 40px;
    }
    @include _768 {
      height: 30px;
    }
  }
  &-lower {
    width: 100%;
    height: 96px;
    background: $header-gradient;
    display: flex;
    align-items: center;
    @include _1024 {
      height: 80px;
    }
    @include _768 {
      height: 70px;
    }
    @include _592 {
      height: 60px;
    }
    img {
      margin-left: 5px;
      @include _1024 {
        height: 60px;
      }
      @include _768 {
        height: 50px;
      }
      @include _592 {
        height: 40px;
      }
    }
  }
}

.container {
  width: 1200px;
}
</style>