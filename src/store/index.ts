/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-02 20:49:33
 * @LastEditTime: 2021-11-03 21:38:16
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
    tokenStartTime: '',
    redirectUrl: '',
    // userId: null,
    // username: '',
    // avatar: '',
  },
  mutations: {
    countAdd(state): void {
      state.count++
    },

    changeState(state: any, data: { key: string; value: any }) {
      const { key, value } = data
      state[key] = value
    },

    setToken(state, { token = null, isdb = true } = {}) {
      service.setToken(token)
      state.token = token
      if (isdb) {
        db.set({
          key: 'token',
          value: token,
          expires: config.token.expires * 1000,
        })
      }
    },
  },
  actions: {},
  modules: {},
})
