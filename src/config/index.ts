/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 15:21:37
 * @LastEditTime: 2021-05-17 09:41:12
 * @LastEditors: mTm
 */
const config = {
  title: {
    main: 'isdream-sso',
  },
  token: {
    // 'headers' | 'params' | 'data'
    position: 'headers',
    key: 'Authorization',
    value: 'Bearer TOKEN',
    expires: 7 * 24 * 3600,
  },

  // 储存时间
  // expires: 30 * 24 * 3600,
  // 本地存储前缀标识
  dbPrefix: 'isdream',
  loginName: 'Login',
  logoutName: 'Logout',
  mainName: 'Main',
}

export default config
