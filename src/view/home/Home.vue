<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-02 18:08:19
 * @LastEditTime: 2021-05-02 21:00:47
 * @LastEditors: mTm
-->
<template>
  <div>Home</div>
  <div>count: {{ count }}</div>
  <button @click="countAdd">count++</button>
  <button @click="goPage">detail</button>
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
