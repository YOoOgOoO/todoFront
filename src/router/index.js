import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'
import Login from '@/view/Login'
import Home from '@/components/Home'

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
          component: Home
        }
      ]
    }
  ]
})

export default router
