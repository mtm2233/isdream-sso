/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 20:59:20
 * @LastEditTime: 2021-11-02 22:46:41
 * @LastEditors: mTm
 */
import { store } from '@/store'
import { ssoProject } from '@/api/ssoProject'
import { logout } from '@/api/user'

export default function (): void {
  const token = store.state.token
  const tokenStartTime = store.state.tokenStartTime
  const searchParams = new URLSearchParams(location.search)
  const url = searchParams.get('url') || store.state.redirectUrl
  const id = searchParams.get('id')

  const pathname = location.pathname

  if (searchParams.get('url')) {
    store.commit('changeState', {
      key: 'redirectUrl',
      value: url,
    })
  }

  if (url && token) {
    // 保存登录情况
    if (id) {
      ssoProject({ project_id: id })
    }
    // 是否为退出
    if (pathname === '/user/logout') {
      logout().then(() => {
        store.commit('setToken', null)
        const newPath = `${url}`
        location.href = newPath
      })
    } else {
      const newPath = `${url}?token=${token}&startTime=${tokenStartTime}`
      location.href = newPath
    }
  }

  // sso token失效
  if (url && pathname === '/user/logout') {
    store.commit('setToken')
    const newPath = `${url}`
    location.href = newPath
  }
}
