/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:07:17
 * @LastEditTime: 2021-05-03 16:17:56
 * @LastEditors: mTm
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
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
        name: 'Login',
        component: () => import('@/view/login/Login.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
