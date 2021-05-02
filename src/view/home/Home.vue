<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:08:19
 * @LastEditTime: 2021-05-02 21:10:40
 * @LastEditors: mTm
-->
<template>
  <div>Home</div>
  <div>count: {{ count }}</div>
  <ASpace>
    <AButton type="primary" @click="countAdd">count++</AButton>
    <AButton @click="goPage">detail</AButton>
  </ASpace>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

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

    const countAdd = () => store.commit('countAdd')
    return {
      count,
      goPage,
      countAdd,
    }
  },
})
</script>
