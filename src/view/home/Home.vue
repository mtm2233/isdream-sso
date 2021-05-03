<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:08:19
 * @LastEditTime: 2021-05-03 15:58:36
 * @LastEditors: mTm
-->
<template>
  <div>Home</div>
  <div>count: {{ count }}</div>
  <ASpace>
    <AButton type="primary" @click="countAdd">count++</AButton>
    <AButton @click="goPage">detail</AButton>
    <AButton @click="changePrimary">changePrimary</AButton>
  </ASpace>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { login } from '@/api/login'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    const store = useStore()

    const count = computed(() => store.state.count)
    const goPage = () => {
      router.push({
        name: 'Details',
      })
    }
    const changePrimary = () => {
      ;(window as any).less.modifyVars({
        '@primary-color': '#52C41A',
      })
    }

    const countAdd = () => store.commit('countAdd')

    onMounted(() => {
      login({
        user: 'isdream',
        password: '123456',
      }).then(res => {
        console.log(res)
      })
    })
    return {
      count,
      goPage,
      countAdd,
      changePrimary,
    }
  },
})
</script>
