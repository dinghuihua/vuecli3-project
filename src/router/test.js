export default [
  {
    path: '/test/path',
    name: 'PathDemo',
    component: () => import(/* webpackChunkName: "PathDemo" */ 'views/test/PathDemo.vue')
  }
]
