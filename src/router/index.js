import Vue from 'vue'
import Router from 'vue-router'
import PageRoute from './page'
import Test from './test'
import store from '../store/index'
Vue.use(Router)

const router = new Router({
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
    ...Test,
    {
      path: '*',
      component: () => import('views/error/404.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 切换路由后滚动到顶部或者锚点
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.auth) { // 判断该路由是否需要登录权限
    if (store.getters.loginStatus || token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }

  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/') // 如果上级也未匹配到路由则跳转到首页，如果上级能匹配到则转上级路由
  } else {
    next()
  }
})

router.afterEach(route => {
  const arr = ['Index', 'SearchInsurance', 'Find', 'Mine']
  if (arr.indexOf(route.name) !== -1) {
    store.commit('SHOW_FOOTER', true)
  } else {
    store.commit('SHOW_FOOTER', false)
  }

  if (route.meta.title) {
    document.title = route.meta.title
  }
})

export default router
