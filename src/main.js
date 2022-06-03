import Vue from 'vue'
import App from './App.vue'
import store from "@/store";

import '@/assets/styles/layout.scss';
import '@/assets/styles/mixin.scss';
import '@/assets/styles/variables.scss';
import router from './router'

export const eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
