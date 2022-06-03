<template>
  <div class="todo">
    <div class="todo-wrapper">
      <div class="container">
        <div class="todo-inner">
          <div class="todo-inner__logo">
            <img src="../assets/images/logo-todo.svg" alt="logo">
          </div>
          <div class="todo-inner__section">
            <div class="todo-header">
              <div class="todo-title">
                Thank you, {{this.currentUserName}}!
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
            <todo-list :todoList="todoList" @edit-todo="editTodo" @remove-todo="removeTodo"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {EventBus} from "@/main";
import PrimaryButton from "@/components/PrimaryButton";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

export default {
  name: "TodoPage",
  components: {TodoForm, TodoList, PrimaryButton},

  data(){
    return {
      currentUserName: '',
      todoList: [
        {id: 10, title: 'TodoItem10', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, itaque?'},
        {id: 3, title: 'TodoItem3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, itaque?'},
        {id: 2, title: 'TodoItem2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, itaque?'},
        {id: 1, title: 'TodoItem1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, itaque?'},
      ],
      isDialogVisible: false,
      isEditing: false,
      dataForChange: {},
      dataIndex: null
    }
  },
  mounted() {
    this.currentUserName = JSON.parse(localStorage.getItem('user')).name;
  },
  methods: {
    createTodo(item){
      this.todoList.unshift(item)
      this.isDialogVisible = false
      this.isEditing = false
      this.dataForChange = {}
    },
    editTodo(item) {
      this.isDialogVisible = true;
      this.isEditing = true;
      this.dataForChange = item;
      this.dataIndex = this.todoList.indexOf(item);
    },
    updateTodo(item) {
      this.todoList.splice(this.dataIndex, 1, item)
      this.isDialogVisible = false;
      this.isEditing = false;
    },
    removeTodo(item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
    },
    showDialog(){
      this.isDialogVisible = true
    },
    hideDialog() {
      this.isDialogVisible = false;
      this.isEditing = false;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";

.login-btn {
  border-radius: 5px;
  width: 200px;
}

.todo {
  &-wrapper {
    background: $header-gradient;
    height: 800px;
    width: 100%;
  }
  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__logo {
      margin-top: 65px;
      margin-bottom: 67px;
    }
    &__section {
      background: white;
      width: 100%;
      padding: 0 70px;
      min-height: 500px;
      .todo {
        &-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          .todo-title {
            font-size: 60px;
            font-weight: 700;
            color: $main-grey;
            text-align: center;
            padding: 20px 0;
          }
        }
      }
    }
  }
}
</style>