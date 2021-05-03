/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-02 20:49:33
 * @LastEditTime: 2021-05-03 20:49:36
 * @LastEditors: mTm
 */
import { createStore, Store } from 'vuex'
import db from '@/libs/db'
import config from '@/config'

import service from '@/libs/service'

export const store: Store<any> = createStore({
  state: {
    count: 0,
    token: '',
    // userId: null,
    // username: '',
    // avatar: '',
  },
  mutations: {
    countAdd(state): void {
      state.count++
    },

    setToken(state, token) {
      service.setToken(token)
      state.token = token
      db.set({
        key: 'token',
        value: token,
        expires: config.token.expires * 1000,
      })
    },
  },
  actions: {},
  modules: {},
})
