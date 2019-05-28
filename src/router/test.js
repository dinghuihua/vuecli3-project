export default [
  {
    path: '/test/path',
    name: 'PathDemo',
    component: () => import(/* webpackChunkName: "PathDemo" */ 'views/test/PathDemo.vue')
  },
  {
    path: '/test/demo',
    name: 'Demo',
    component: () => import('views/test/Demo.vue'),
    meta: {
      auth: true
    }
  }
]
