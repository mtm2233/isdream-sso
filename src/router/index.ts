/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:07:17
 * @LastEditTime: 2021-05-02 18:16:05
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
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
