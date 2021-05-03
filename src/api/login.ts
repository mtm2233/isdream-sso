/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-03 15:16:36
 * @LastEditTime: 2021-05-03 15:17:05
 * @LastEditors: mTm
 */
import service from '@/libs/service'

export function login(data = {}): Promise<any> {
  return service.request({
    url: '/api/login',
    method: 'POST',
    data,
  })
}