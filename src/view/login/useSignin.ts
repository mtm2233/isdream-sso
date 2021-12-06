/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-12-06 22:53:50
 * @LastEditTime: 2021-12-06 23:08:33
 * @LastEditors: mTm
 */
import { reactive, UnwrapRef } from 'vue'
import { SigninForm } from './config/interface'
import { message as $message } from 'ant-design-vue'

import { signin } from '@/api/user'

class UseSignin {
  public signinForm: UnwrapRef<SigninForm> = reactive({
    user: '',
    password: '',
    confirmPassword: '',
    email: '',
  })

  signin = (callback: any) => {
    const { user, password, confirmPassword, email } = this.signinForm
    const emailReg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    if (!user || !password) {
      $message.warning('账号密码不能为空')
    } else if (password !== confirmPassword) {
      $message.warning('两次密码不同')
    } else if (email && !emailReg.test(email)) {
      $message.warning('请检查邮箱是否正确')
    } else {
      signin({
        user,
        password,
        email,
      }).then(() => {
        this.signinForm.user = ''
        this.signinForm.password = ''
        this.signinForm.confirmPassword = ''
        this.signinForm.email = ''
        $message.success('注册成功，请登录')
        callback()
      })
    }
  }

  values = () => {
    const { signinForm, signin } = this
    return {
      signinForm,
      signin,
    }
  }
}

export default new UseSignin()
