<template>
  <transition name="fade" appear>
    <div class="show-todo" v-if="show" @click="hideDialog">
      <transition name="pop" appear>
        <div @click.stop class="show-todo__inner">
          <div class="header">
            <span>{{targetTodo.title}}</span>
            <i class="fa-solid fa-xmark" @click="hideDialog"></i>
          </div>
          <div class="description">
            {{targetTodo.description}}
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import {eventBus} from '@/main'

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
@import "./style";
</style>