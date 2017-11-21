import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import admin from '../views/admin'
import register from '../views/register'
import enter from '../views/enter'
import huangshan from '../views/huangshan'

// import con1 from '../views/npms/con1'
// import con2 from '../views/npms/con2'
// import con3 from '../views/npms/con3'
// import con4 from '../views/npms/con4'
// import con5 from '../views/npms/con5'
// import con6 from '../views/npms/con6'

Vue.use(Router)

const router = new Router({
 mode:'hash',
  routes: [
    {
      path: '/',
      name: 'huangshan',
      component: huangshan
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
    // {
    //   path: '/views/npms/con1',
    //   name: 'con1',
    //   component: con1
    // },
    // {
    //   path: '/views/npms/con2',
    //   name: 'con2',
    //   component: con2
    // },
    // {
    //   path: '/views/npms/con3',
    //   name: 'con3',
    //   component: con3
    // },
    // {
    //   path: '/views/npms/con4',
    //   name: 'con4',
    //   component: con4
    // },
    // {
    //   path: '/views/npms/con5',
    //   name: 'con5',
    //   component: con5
    // },
    // {
    //   path: '/views/npms/con6',
    //   name: 'con6',
    //   component: con6
    // },
  ]
})

export default router;