<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:08:19
 * @LastEditTime: 2021-05-02 18:21:25
 * @LastEditors: mTm
-->
<template>
  <div>Home</div>
  <button @click="goPage">detail</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    const goPage = () => {
      router.push({
        name: 'Details',
      })
    }
    return {
      goPage,
    }
  },
})
</script>
