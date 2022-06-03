import LoginPage from "@/pages/LoginPage";
import todoPage from "@/pages/TodoPage";

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
        component: todoPage
    },
    {
        path: "/page-not-found",
        alias: '*',
        component: { render: (h) => h("div", ["404! Page Not Found!"]) },
    }
]

export default routes