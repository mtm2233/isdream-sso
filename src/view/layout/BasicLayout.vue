<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:08:19
 * @LastEditTime: 2021-05-02 21:11:03
 * @LastEditors: mTm
-->
<template>
  <ACard>
    <div>Main</div>
    <RouterView></RouterView>
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
