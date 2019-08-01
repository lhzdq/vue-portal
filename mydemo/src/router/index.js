import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '@/page/index/index'
import login from '@/page/login/login'
import cockpit from '@/page/cockpit/cockpit'
import business from '@/page/business/business'
import policy from '@/page/policy/policy'
import warning from '@/page/warning/warning'
import record from '@/page/record/record'
import supervision from '@/page/supervision/supervision'
import support from '@/page/support/support'



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
    {
      path: '/business',
      name: 'business',
      component: business,
      meta: {
        title: '商务服务'
      }
    },
    {
      path: '/policy',
      name: 'policy',
      component: policy,
      meta: {
        title: '政策规划'
      }
    },
    {
      path: '/warning',
      name: 'warning',
      component: warning,
      meta: {
        title: '商务情况监测预警'
      }
    },
    {
      path: '/record',
      name: 'record',
      component: record,
      meta: {
        title: '备案审批'
      }
    },
    {
      path: '/supervision',
      name: 'supervision',
      component: supervision,
      meta: {
        title: '事中事后监管'
      }
    },
    {
      path: '/support',
      name: 'support',
      component: support,
      meta: {
        title: '业务支撑'
      }
    },
  ]
})
