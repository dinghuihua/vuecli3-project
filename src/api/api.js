import { get, post } from './http.js'

export default {
  // 验证码登录接口
  verifyLogin (params) {
    return post('/broker/verifyLogin', params)
  },
  // 用户密码登录接口
  passwordLogin (params) {
    return post('/broker/passwordLogin', params)
  },
  getAskList (params) {
    return get('/mock/test', params)
  }
}
