/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-04-28 16:15:02
 * @LastEditTime: 2021-05-02 21:20:40
 * @LastEditors: mTm
 */
import { App, Plugin } from 'vue'
import { Button, Space, Card } from 'ant-design-vue'

const plugins: Plugin[] = [Button, Space, Card]

export const setupAntd = (app: App, options: any = {}): void => {
  // app.config.globalProperties.$message = message
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
