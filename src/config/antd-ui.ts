/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-04-28 16:15:02
 * @LastEditTime: 2021-05-03 17:18:03
 * @LastEditors: mTm
 */
import { App, Plugin } from 'vue'
import {
  ConfigProvider,
  Button,
  Space,
  Card,
  Form,
  Input,
} from 'ant-design-vue'

const plugins: Plugin[] = [ConfigProvider, Button, Space, Card, Form, Input]

export const setupAntd = (app: App, options: any = {}): void => {
  // app.config.globalProperties.$message = message
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
