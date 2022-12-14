import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Home from '@/views/home/Home'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/404',
      name:'notFound',
      component:NotFound
    }
  ]
})
