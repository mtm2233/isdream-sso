/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 15:16:36
 * @LastEditTime: 2021-11-03 21:29:37
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

export function signin(data = {}): Promise<any> {
  return service.request({
    url: '/api/user',
    method: 'POST',
    data,
  })
}

export function logout(data = {}): Promise<any> {
  return service.request({
    url: '/api/logout',
    method: 'POST',
    data,
  })
}

export function auth(data = {}): Promise<any> {
  return service.request({
    url: '/api/user/auth',
    method: 'GET',
    data,
  })
}
