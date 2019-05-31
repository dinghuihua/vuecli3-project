import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'amfe-flexible'
import './assets/styles/index.less'
import util from './util/common.js'
import API from './api/api.js'
import filters from './util/filters.js'
import { Toast } from 'vant'
Vue.use(Toast)
Vue.prototype.util = util
Vue.prototype.API = API
// 注入全局过滤器
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
