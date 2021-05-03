/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 15:21:37
 * @LastEditTime: 2021-05-03 15:22:40
 * @LastEditors: mTm
 */
const config = {
  token: {
    // 'headers' | 'params' | 'data'
    position: 'headers',
    key: 'Authorization',
    value: 'Bearer TOKEN',
    expires: 7 * 24 * 3600,
  },

  // 储存时间
//   expires: 30 * 24 * 3600,
  // 本地存储前缀标识
  dbPrefix: 'isdream',
}

export default config
