/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-02 21:19:09
 * @LastEditors: mTm
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import { setupAntd } from './config/antd-ui'

const app = createApp(App)

setupAntd(app)

app.use(router).use(store).mount('#app')
