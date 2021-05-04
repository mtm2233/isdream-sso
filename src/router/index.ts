/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-02 18:07:17
 * @LastEditTime: 2021-05-03 21:08:34
 * @LastEditors: mTm
 */
import Nprogress from 'nprogress'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import config from '@/config'
import { store } from '@/store'
import db from '@/libs/db'
import bootstrap from '@/libs/bootstrap'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: config.mainName,
    redirect: {
      name: 'Home',
    },
    component: () => import('@/view/layout/BasicLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/view/home/Home.vue'),
      },
      {
        path: 'details',
        name: 'Details',
        component: () => import('@/view/details/Details.vue'),
      },
      {
        path: 'login',
        name: config.loginName,
        component: () => import('@/view/login/Login.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  Nprogress.start()
  first()
  if (!verifyLogin() && to.name !== config.loginName) {
    next({ name: config.loginName })
    return false
  }
  bootstrap()
  next()
})

router.afterEach(to => {
  Promise.resolve().then(() => {
    Nprogress.done()
  })
  ;(window.document.title as any) = to?.meta?.title || config.title.main
  window.scrollTo(0, 0)
})

export { router }

const first = () => {
  store.commit('setToken', db.get('token'))
}

const verifyLogin = (): boolean => {
  return store.state.token ? true : false
}
