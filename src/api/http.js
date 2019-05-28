import axios from 'axios'
import { Toast } from 'vant'
axios.defaults.timeout = 12000 // 请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
console.log(axios.defaults.baseURL)
// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios 请求拦截器
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token') || ''
    const client = 'h5'
    const version = 'v1.0.0'

    if (config.method === 'post') {
      config.data = {
        loginToken: token,
        client: client,
        version: version,
        ...config.data
      }
    } else if (config.method === 'get') {
      config.params = {
        loginToken: token,
        client: client,
        version: version,
        ...config.params
      }
    }

    return config
  },
  error => {
    return Promise.error(error)
  }
)
// axios respone拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，且后台返回的接口状态约定code为0，说明接口请求成功，可以正常拿到数据，否则的话抛出错误
    if ((response.status === 200 || response.status === 304) && response.data.code === 0) {
      return Promise.resolve(response)
    } else {
      Toast(response.data.message)
      return Promise.reject(response)
    }
  },
  error => {
    console.log(error.response)
    const responseStatus = error.response.status
    switch (responseStatus) {
      case 404:
        Toast('网络请求不存在')
        break
      default:
        Toast(error.response.data.message)
    }
    return Promise.reject(error.response)
  }
)
/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export { get, post }
