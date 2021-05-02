<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-01 22:19:41
 * @LastEditTime: 2021-05-02 21:41:05
 * @LastEditors: mTm
-->
<template>
  <RouterView></RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="less">
@import './assets/styles/index.less';

body {
  overflow-y: auto;
}
</style>
