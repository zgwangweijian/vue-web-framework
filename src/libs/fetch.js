import axios from 'axios'

const ajaxUrl = process.env.NODE_ENV === 'development'
  ? ''
  : process.env.NODE_ENV === 'production'
    ? ''
    : ''

export function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: ajaxUrl,
      timeout: 30 * 1000 // 30秒超时
    })
    instance(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // TODO 跳转登录页面
          break
      }
    }
    return Promise.reject(error.response.data)
  })
