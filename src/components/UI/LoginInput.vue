<template>
  <input type="text" >
</template>

<script>
export default {
  name: "LoginInput"
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
@import "../../assets/styles/mixin";

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
</style>