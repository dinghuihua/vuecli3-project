import Vue from 'vue'
import Router from 'vue-router'
import PageRoute from './page'
import Test from './test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('views/index/Index.vue'),
      meta: {
        keepAlive: true
      }
    },
    ...PageRoute,
    ...Test
  ]
})
