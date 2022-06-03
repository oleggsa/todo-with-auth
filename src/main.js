import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";

import '@/assets/styles/layout.scss';
import '@/assets/styles/mixin.scss';
import '@/assets/styles/variables.scss';
import router from './router'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
