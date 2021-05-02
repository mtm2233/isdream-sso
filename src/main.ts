/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-02 20:53:32
 * @LastEditors: mTm
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

const app = createApp(App)

app.use(router).use(store).mount('#app')
