import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './../components/Index.vue'
import NewView from './../components/NewView.vue'
import Login from './../components/Login.vue'
import Register from './../components/Register.vue'
import NewPost from './../components/NewPost.vue'
import me from './../components/me.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Index
    },
    {
        path: '/NewView/:id',
        component: NewView
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/NewPost',
        component: NewPost
    },
    {
        path:'/me',
        component:me
    }
]

const router = new VueRouter({
    base:'/demoEnd/dist/',
    routes, // (缩写) 相当于 routes: routes
    mode:"history"  //去除url上的#
})

export default router