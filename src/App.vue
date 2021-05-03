<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-03 15:25:24
 * @LastEditors: mTm
-->
<template>
  <RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loadProvides from '@/libs/provides'

export default defineComponent({
  name: 'App',
  setup() {
    loadProvides()
    return {}
  },
})
</script>

<style lang="less">
@import './assets/styles/index.less';

body {
  overflow-y: auto;
}
</style>
