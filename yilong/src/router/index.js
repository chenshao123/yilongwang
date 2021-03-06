import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import admin from '../views/admin'
import register from '../views/register'
import enter from '../views/enter'
import huangshan from '../views/huangshan'


Vue.use(Router)

const router = new Router({
 mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: admin
    },
    {
      path: '/views/register',
      name: 'register',
      component: register
    },
    {
      path: '/views/enter',
      name: 'enter',
      component: enter
    },
    
  ]
})

export default router;