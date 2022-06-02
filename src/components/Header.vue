<template>
  <div class="header">
    <div class="header-upper">

    </div>
    <div class="header-lower">

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
}
</style>