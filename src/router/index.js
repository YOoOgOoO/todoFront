import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'
import Login from '@/view/Login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HelloWorld
        }
      ]
    }
  ]
})

export default router
