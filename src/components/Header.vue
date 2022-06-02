<template>
  <div class="header">
    <div class="header-upper">

    </div>
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
  }
  &-lower {
    width: 100%;
    height: 96px;
    background: $header-gradient;
    display: flex;
    align-items: center;
    img {
      margin-left: 5px;
    }
  }
}

.container {
  width: 1200px;
}
</style>