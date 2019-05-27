import * as type from './mutation_types.js'

export default {
  [type.SHOW_FOOTER] (state, flag) {
    state.showFooter = flag
  },
  [type.SET_LOGIN_STATUS] (state, flag) {
    state.loginStatus = flag
  },
  // 设置是否正在加载
  [type.SET_LOADING] (state, loadstate) {
    state.isLoading = loadstate
  }
}
