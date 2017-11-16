import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import enter from '@/components/enter'
// import head from '@/components/head'
// import stern from '@/components/stern'

Vue.use(Router)

const router = new Router({
 mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    }
  ]
})

export default router;