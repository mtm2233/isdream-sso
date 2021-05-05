/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-05 21:36:15
 * @LastEditors: mTm
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      { find: /^~/, replacement: '' },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  base: 'https://sso.isdream.cn/', // 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 9001, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域
    // 设置代理
    proxy: {
      '^/api/.*': {
        target: 'https://api.isdream.cn/sso',
        changeOrigin: true, // 将主机标头的来源更改为目标URL,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
})
