/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-02 20:49:33
 * @LastEditTime: 2021-05-02 20:56:02
 * @LastEditors: mTm
 */
import { createStore, Store } from 'vuex'

export const store: Store<any> = createStore({
  state: {
    count: 0,
  },
  mutations: {
    countAdd(state): void {
      state.count++
    },
  },
  actions: {},
  modules: {},
})
