/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-02 18:11:36
 * @LastEditors: mTm
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(router).mount('#app')
