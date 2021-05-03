/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-04-23 20:34:54
 * @LastEditTime: 2021-05-03 16:00:20
 * @LastEditors: mTm
 */
import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import Nprogress from 'nprogress'

import { message } from 'ant-design-vue'

// axios.defaults.baseURL = 'https:api.isdream.cn/'

//post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
//设置超时
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  config => {
    Nprogress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      Nprogress.done()
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    message.error(`异常请求：${JSON.stringify(error.message)}`)
  },
)
class MyRequest {
  request(config: AxiosRequestConfig): Promise<any> {
    const { method = 'GET', data = {}, params = {} } = config
    let { url } = config
    console.log()
    if (method === 'GET') {
      url += '?' + qs.stringify(params)
    }
    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data,
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default new MyRequest()
