/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-03 21:03:32
 * @LastEditTime: 2021-05-03 21:03:56
 * @LastEditors: mTm
 */
import service from '@/libs/service'

export function ssoProject(data = {}): Promise<any> {
  return service.request({
    url: '/api/sso-project',
    method: 'POST',
    data,
  })
}