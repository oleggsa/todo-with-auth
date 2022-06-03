<template>
  <div class="todo-list" v-if="todoList.length > 0">
    <transition-group name="transition" tag="div">
      <div class="todo-item" v-for="item in todoList" :key="item.title">
        <div class="todo-body">
          <div class="header">{{ item.title }}</div>
          <div class="description">{{item.description}}</div>
        </div>
        <div class="btns">
          <button class="edit-btn" @click="$emit('edit-todo', item)"><i class="fa-solid fa-pen-to-square fa-xl"></i></button>
          <button class="remove-btn" @click="$emit('remove-todo', item)"><i class="fa-solid fa-xmark fa-xl"></i></button>
        </div>
      </div>
    </transition-group>
  </div>
  <h2 v-else>There is no TODO!</h2>
</template>

<script>
export default {
  name: "TodoList",
  props: ['todoList']
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";
.todo-list {
  flex-wrap: wrap;
  .todo-item {
    background: $todo-gradient;
    width: 100%;
    border-radius: 3px;
    box-shadow: 2px 3px 4px black;
    padding: 12px 18px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include _592 {
      padding: 6px 9px;
    }
    &:last-child {
      margin-bottom: 50px;
    }
    .todo-body {
      .header {
        font-size: 16px;
        font-weight: 500;
        display: flex;
        margin-bottom: 10px;
        overflow-wrap: break-word;
      }
      .description {
        font-size: 13px;
        overflow-wrap: break-word;
      }
    }
    .btns {
      display: flex;
      .edit-btn,
      .remove-btn {
        border: none;
        margin-left: 10px;
        background: none;
        height: 20px;
        width: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        @include _592 {
          margin-left: 15px;
        }
      }
    }
  }
}

h2 {
  text-align: center;
  font-size: 30px;
  color: darkred;
}

.transition-item {
  display: inline-block;
  margin-right: 10px;
}
.transition-enter-active, .transition-leave-active {
  transition: all 0.1s;
}
.transition-enter, .transition-leave-to {
  opacity: 0;
  transform: translateX(-130px);
}
</style>