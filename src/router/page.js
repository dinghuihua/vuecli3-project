export default [
  /**
   *About 用户
   */
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ 'views/sign/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ 'views/sign/Register.vue')
  },
  /**
   *About 险种
   */
  {
    path: '/searchInsurance',
    name: 'SearchInsurance',
    component: () => import(/* webpackChunkName: "SearchInsurance" */ 'views/search/SearchInsurance.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import(/* webpackChunkName: "Find" */ 'views/find/Find.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ 'views/mine/Mine.vue')
  }
]
