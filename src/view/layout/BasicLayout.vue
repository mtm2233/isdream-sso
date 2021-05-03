<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:08:19
 * @LastEditTime: 2021-05-03 17:08:01
 * @LastEditors: mTm
-->
<template>
  <ACard>
    <div>Main</div>
    <RouterView />
  </ACard>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
  setup() {
    return {}
  },
})
</script>
