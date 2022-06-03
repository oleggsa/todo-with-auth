<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog-inner">
      <div class="todo-create">
        <form @submit.prevent>
          <h4>{{ !isEditing ? 'Create' : 'Edit' }} TODO</h4>
          <input
              @input="newTodo.title = $event.target.value"
              v-bind:value="isEditing ? newTodo.title = todoToEdit.title : newTodo.title = ''"
              type="text"
              placeholder="Title"
          >
          <input
              @input="newTodo.description = $event.target.value"
              v-bind:value="isEditing ? newTodo.description = todoToEdit.description : newTodo.description = ''"
              type="text"
              placeholder="Description"
          >
          <primary-button @click.native="isEditing ? createTodo('update') : createTodo('new')">{{!isEditing ? 'Submit' : 'Edit'}}</primary-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "TodoForm",
  components: {PrimaryButton},
  props: ['show', 'todoToEdit', 'isEditing'],
  data(){
    return {
      newTodo: {
        title: '',
        description: '',
        id: this.isEditing ? this.todoToEdit.id : ''
      },
    }
  },
  watch: {
    isEditing(newVal){
      console.log(newVal, 'editing', this.todoToEdit)
    }
  },
  methods: {
    createTodo(condition) {
      if(condition === 'new'){
        if (!this.newTodo.title.length || !this.newTodo.description.length) return
        const newTodo = {
          id: Date.now(),
          title: this.newTodo.title,
          description: this.newTodo.description,
        }
        this.$emit('create-todo', newTodo)
        this.newTodo.title = ''
        this.newTodo.description = ''
      }
      if(condition === 'update'){
        if (!this.newTodo.title.length || !this.newTodo.description.length) return
        const newTodo = {
          id: this.todoToEdit.id,
          title: this.newTodo.title,
          description: this.newTodo.description,
        }
        this.$emit('update-todo', newTodo)
        this.newTodo.title = ''
        this.newTodo.description = ''
      }
    },
    hideDialog() {
      this.$emit('hide-dialog', false);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-btn {
  border-radius: 5px;
}
.dialog {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  &-inner {
    padding: 18px;
    margin: auto;
    background: white;
    border-radius: 10px;
    min-width: 300px;
    min-height: 100px;
  }
}
.todo-create {
  h4 {
    margin: 0 0 10px;
    text-align: center;
    font-size: 26px;
  }
  input {
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    padding: 8px;
  }
}
</style>