export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ 'views/sign/Login.vue')
  },
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
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: (resolve) => void(require(['page/sign/register.vue'], resolve))
  // },
  // {
  //   path: '/settings',
  //   component: (resolve) => void(require(['page/user/setting.vue'], resolve)),
  //   meta: {
  //     requireAuth: true
  //   }
  // }
]
