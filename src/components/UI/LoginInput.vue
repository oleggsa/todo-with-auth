<template>
  <input v-if="type === 'text'" type="text" @input="$emit('input', $event.target.value)">
  <input v-else-if="type === 'password'" type="password" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: "LoginInput",
  props: ['type']
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