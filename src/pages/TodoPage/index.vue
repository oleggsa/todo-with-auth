<template>
  <div class="todo">
    <div class="todo-wrapper">
      <div class="container">
        <button class="logout" @click="logout"><i class="fa-solid fa-arrow-right-from-bracket"></i>LOG OUT</button>
        <div class="todo-inner">
          <div class="todo-inner__logo">
            <img src="../../assets/images/logo-todo.svg" alt="logo">
          </div>
          <div class="todo-inner__section">
            <div class="todo-header">
              <div class="todo-title">
                Welcome, {{this.currentUserName}}!
              </div>
              <primary-button @click.native="showDialog">CREATE</primary-button>
              <todo-form
                  @create-todo="createTodo"
                  @hide-dialog="hideDialog"
                  :show="isDialogVisible"
                  :isEditing="isEditing"
                  :todoToEdit="dataForChange"
                  @update-todo="updateTodo"
              />
            </div>
            <todo-list
                :todoList="todoList"
                @edit-todo="editTodo"
                @remove-todo="removeTodo"
                :isInfoDialogVisible="isInfoDialogVisible"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/UI/PrimaryButton";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import {eventBus} from '@/main'

export default {
  name: "TodoPage",
  components: {TodoForm, TodoList, PrimaryButton},

  data(){
    return {
      currentUserName: '',
      todoList: [],
      isDialogVisible: false,
      isInfoDialogVisible: false,
      isEditing: false,
      dataForChange: {},
      dataIndex: null
    }
  },
  created() {
    eventBus.$on('show-info-dialog', this.showInfoDialog)
    eventBus.$on('hide-dialog', this.hideDialog)
  },
  mounted() {
    this.currentUserName = JSON.parse(localStorage.getItem('user')).name;
    this.todoList = this.$store.getters.getTodos
  },
  methods: {
    createTodo(item){
      this.todoList.unshift(item)
      this.isDialogVisible = false
      this.isEditing = false
      this.dataForChange = {}
      this.$store.commit('updateTodoList', this.todoList)
      document.body.style.overflow = "auto";
    },
    editTodo(item) {
      this.isDialogVisible = true;
      this.isEditing = true;
      this.dataForChange = item;
      this.dataIndex = this.todoList.indexOf(item);
      document.body.style.overflow = "hidden";
    },
    updateTodo(item) {
      this.todoList.splice(this.dataIndex, 1, item)
      this.isDialogVisible = false;
      this.isEditing = false;
      this.$store.commit('updateTodoList', this.todoList)
      document.body.style.overflow = "auto";
    },
    removeTodo(item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
      this.$store.commit('updateTodoList', this.todoList)
    },
    showDialog(){
      this.isDialogVisible = true;
      document.body.style.overflow = "hidden";
    },
    showInfoDialog(){
      this.isInfoDialogVisible = true;
      document.body.style.overflow = "hidden";
    },
    hideDialog() {
      document.body.style.overflow = "auto";
      this.isDialogVisible = false;
      this.isInfoDialogVisible = false;
      this.isEditing = false;
    },
    logout(){
      localStorage.removeItem('user')
      this.$router.replace({path: '/login'})
    }
  },
  beforeDestroy() {
    eventBus.$off('hide-dialog')
    eventBus.$off('show-info-dialog')
  }
}
</script>

<style lang="scss" scoped>
@import "style";
</style>