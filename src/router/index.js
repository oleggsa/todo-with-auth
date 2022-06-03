import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/LoginPage";

Vue.use(VueRouter)

function isAuthenticated(){
  if (localStorage.getItem('user') === null) return false
  return JSON.parse(localStorage.getItem('user')).isAuth
}

const routes = [
  {
    path: '/',
    beforeEnter: function(to, from, next){
      next('/login')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/todo',
    name: 'todo',
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next();
      } else {
        next('/login');
      }
    },
    component: () => import('../views/TodoPage.vue')
  },
  {
    path: "/page-not-found",
    alias: '*',
    component: { render: (h) => h("div", ["404! Page Not Found!"]) },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
