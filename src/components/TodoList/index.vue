<template>
  <div class="todo-list" v-if="todoList.length > 0">
    <show-todo-form :show="isInfoDialogVisible" :targetTodo="targetTodo"/>
    <transition-group name="transition" tag="div">
      <div class="todo-item" v-for="item in todoList" :key="item.id">
        <div class="todo-body" @click="showInfoDialog(item)">
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
  <h2 v-else>Create your first TODO!</h2>
</template>

<script>
import ShowTodoForm from "@/components/ShowTodoForm";
import {eventBus} from '@/main'

export default {
  name: "TodoList",
  components: {ShowTodoForm},
  props: ['todoList', 'isInfoDialogVisible'],
  data() {
    return {
      targetTodo: {}
    }
  },
  methods: {
    showInfoDialog(item){
      this.targetTodo = item;
      eventBus.$emit('show-info-dialog')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>