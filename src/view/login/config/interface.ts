/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 17:20:24
 * @LastEditTime: 2021-12-06 22:57:54
 * @LastEditors: mTm
 */
interface LoginForm {
  user: string
  password: string
}

interface SigninForm {
  user: string
  password: string
  confirmPassword: string
  email?: string
}

export { LoginForm, SigninForm }
