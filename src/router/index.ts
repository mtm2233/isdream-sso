/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-02 18:07:17
 * @LastEditTime: 2021-12-06 22:09:40
 * @LastEditors: mTm
 */
import Nprogress from 'nprogress'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import config from '@/config'
import { store } from '@/store'
import db from '@/libs/db'
import bootstrap from '@/libs/bootstrap'

import { auth } from '@/api/user'

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
        meta: {
          verifyLogin: true,
        },
        component: () => import('@/view/home/Home.vue'),
      },
      {
        path: 'user',
        name: 'User',
        redirect: {
          name: config.loginName,
        },
        component: () => import('@/view/layout/BasicLayout.vue'),
        children: [
          {
            path: 'login',
            name: config.loginName,
            meta: {
              verifyLogin: false,
            },
            component: () => import('@/view/login/Login.vue'),
          },
          {
            path: 'signin',
            name: 'Signin',
            meta: {
              verifyLogin: false,
            },
            component: () => import('@/view/signin/Signin.vue'),
          },
          {
            path: 'logout',
            name: config.logoutName,
            meta: {
              verifyLogin: true,
            },
            component: () => import('@/view/logout/Logout.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  Nprogress.start()
  await first()
  bootstrap()
  if (!verifyLogin() && to.name !== config.loginName && to.meta.verifyLogin) {
    next({ name: config.loginName })
  }
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

const first = async () => {
  if (!store.state.token && db.get('token')) {
    store.commit('setToken', { token: db.get('token'), isdb: false })
    store.commit('changeState', {
      key: 'tokenStartTime',
      value: db.getStartTime('token'),
    })
    await auth()
  }
}

const verifyLogin = (): boolean => {
  return !!store.state.token
}
