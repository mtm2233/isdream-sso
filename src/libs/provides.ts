/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-04-27 22:43:23
 * @LastEditTime: 2021-05-03 15:24:42
 * @LastEditors: mTm
 */
import { provide } from 'vue'
import { message } from 'ant-design-vue'

const provides = {
  $message: message,
}

const loadProvides = (): void => {
  Object.entries(provides).forEach(([k, v]) => {
    provide(k, v)
  })
}

export default loadProvides
