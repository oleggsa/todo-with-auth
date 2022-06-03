<template>
  <button class="login-btn">
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton"
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables";

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
</style>