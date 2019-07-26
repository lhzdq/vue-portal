import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '@/page/index/index'
import login from '@/page/login/login'
import cockpit from '@/page/cockpit/cockpit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/cockpit',
      name: 'cockpit',
      component: cockpit,
      meta: {
        title: '领导驾驶舱'
      }
    },
  ]
})
