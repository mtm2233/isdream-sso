/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 17:23:51
 * @LastEditTime: 2021-12-06 23:08:52
 * @LastEditors: mTm
 */
import { reactive, UnwrapRef } from 'vue'
import { LoginForm } from './config/interface'
import { message as $message } from 'ant-design-vue'

import { store } from '@/store'
import { router } from '@/router'
import config from '@/config'

import { login } from '@/api/user'

class UseLogin {
  public loginForm: UnwrapRef<LoginForm> = reactive({
    user: '',
    password: '',
  })

  login = () => {
    if (this.loginForm.user && this.loginForm.password) {
      login(this.loginForm).then(res => {
        this.loginForm.user = ''
        this.loginForm.password = ''
        $message.success('登录成功，正在跳转')
        store.commit('setToken', { token: res.token, isdb: true })
        router.push({ name: config.mainName })
      })
    } else {
      $message.warning('账号密码不能为空')
    }
  }

  values = () => {
    const { loginForm, login } = this
    return {
      loginForm,
      login,
    }
  }
}

export default new UseLogin()
