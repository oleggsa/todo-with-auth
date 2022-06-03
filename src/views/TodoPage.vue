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
import PrimaryButton from "@/components/PrimaryButton";
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
      this.$store.commit('updateTodoList', this.todoList)
    },
    removeTodo(item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
      this.$store.commit('updateTodoList', this.todoList)
    },
    showDialog(){
      this.isDialogVisible = true;
    },
    showInfoDialog(){
      this.isInfoDialogVisible = true;
    },
    hideDialog() {
      this.isDialogVisible = false;
      this.isInfoDialogVisible = false;
      this.isEditing = false;
    }
  },
  beforeDestroy() {
    eventBus.$off('hide-dialog')
    eventBus.$off('show-info-dialog')
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";

.login-btn {
  border-radius: 5px;
  width: 200px;
  @include _525 {
    width: 100%;
  }
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
      margin: 66px 0;
      @include _1024 {
        margin: 50px 0;
      }
      @include _768 {
        margin: 35px 0;
      }
      @include _592 {
        margin: 25px 0;
      }
      img {
        @include _1024 {
          width: 150px;
        }
        @include _768 {
          width: 100px;
        }
        @include _592 {
          width: 70px;
        }
      }
    }
    &__section {
      background: white;
      width: 100%;
      padding: 0 70px;
      min-height: 535px;
      @include _1200 {
        padding: 0 50px;
      }
      @include _1024 {
        padding: 0 30px;
      }
      @include _768 {
        padding: 0 15px;
      }
      .todo {
        &-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          @include _525 {
            flex-direction: column;
            margin-bottom: 20px;
          }
          .todo-title {
            font-size: 60px;
            font-weight: 700;
            color: $main-grey;
            text-align: center;
            padding: 20px 0;
            @include _1200 {
              font-size: 40px;
            }
            @include _768 {
              font-size: 32px;
            }
            @include _525 {
              padding: 10px 0;
            }
          }
        }
      }
    }
  }
}
</style>