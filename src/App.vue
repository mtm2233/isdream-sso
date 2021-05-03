<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-03 17:07:45
 * @LastEditors: mTm
-->
<template>
  <AConfigProvider :locale="locale" :auto-insert-space-in-button="false">
    <RouterView />
  </AConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loadProvides from '@/libs/provides'
import zh_CN from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

export default defineComponent({
  name: 'App',
  setup() {
    loadProvides()
    return {
      locale: zh_CN,
    }
  },
})
</script>

<style lang="less">
@import './assets/styles/index.less';

body {
  overflow-y: auto;
}
</style>
