/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 17:21:03
 * @LastEditTime: 2021-05-03 17:21:42
 * @LastEditors: mTm
 */
const rules = {
  user: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
    { min: 6, max: 15, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    { min: 6, max: 15, message: '请输入密码', trigger: 'blur' },
  ],
}

export { rules }
