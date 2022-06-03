<template>
  <div class="show-todo" v-if="show" @click="hideDialog">
    <div @click.stop class="show-todo__inner">
      <div class="header">
        <span>{{targetTodo.title}}</span>
        <i class="fa-solid fa-xmark" @click="hideDialog"></i>
      </div>
      <div class="description">
        {{targetTodo.description}}
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "ShowTodoForm",
  props: ['todoItem', 'show', 'targetTodo'],
  methods: {
    hideDialog() {
      eventBus.$emit('hide-dialog');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";

.show-todo {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  @include _592 {
    padding: 20px;
  }
  @include _450 {
    padding: 10px;
  }
  &__inner {
    padding: 20px;
    margin: auto;
    background: white;
    border-radius: 10px;
    min-width: 300px;
    max-width: 500px;
    min-height: 100px;

    @include _375 {
      padding: 12px;
    }
    .header {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 10px;
      overflow-wrap: anywhere;
      display: flex;
      justify-content: space-between;
    }
    .description {
      font-size: 18px;
      overflow-wrap: anywhere;
      margin-bottom: 10px;
    }
  }
}
</style>