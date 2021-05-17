/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 20:59:20
 * @LastEditTime: 2021-05-17 11:15:45
 * @LastEditors: mTm
 */
import { store } from '@/store'
import { ssoProject } from '@/api/ssoProject'
import { logout } from '@/api/user'

export default function (): void {
  const token = store.state.token
  const searchParams = new URLSearchParams(location.search)
  const url = searchParams.get('url')
  const id = searchParams.get('id')
  const pathname = location.pathname

  if (url && token) {
    if (id) {
      ssoProject({ project_id: id })
    }
    if (pathname === '/user/logout') {
      logout().then(() => {
        store.commit('setToken', null)
        const newPath = `${url}`
        location.href = newPath
      })
    } else {
      const newPath = `${url}?token=${token}`
      location.href = newPath
    }
  }
}
