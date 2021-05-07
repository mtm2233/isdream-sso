/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 20:59:20
 * @LastEditTime: 2021-05-07 23:25:11
 * @LastEditors: mTm
 */
import { store } from '@/store'
import { ssoProject } from '@/api/ssoProject'

export default function (): void {
  const token = store.state.token
  const searchParams = new URLSearchParams(location.search)
  const url = searchParams.get('url')
  const id = searchParams.get('id')
  if (id) {
    ssoProject({ project_id: id })
  }

  if (url && token) {
    const newPath = `${url}?token=${token}`
    location.href = newPath
  }
}
