<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-04 20:58:06
 * @LastEditTime: 2021-05-17 11:06:07
 * @LastEditors: mTm
-->
<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-form">
        <RouterView />
      </div>
      <div class="login-box-action">
        <!-- <a-typography-link>找回密码</a-typography-link> -->
        <a-typography-link
          v-show="routerName === 'Login'"
          @click="goPage('Signin')"
          >用户注册</a-typography-link
        >
        <a-typography-link
          v-show="routerName === 'Signin' || routerName === 'Logout'"
          @click="goPage('Login')"
          >用户登录</a-typography-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()

    const routerName = computed(() => router.currentRoute.value?.name)

    const goPage = (name: string) => {
      router.push({ name })
    }
    return {
      goPage,
      routerName,
    }
  },
})
</script>
<style scoped lang="less">
.login {
  height: 100%;
  padding: 0 20px;
  position: relative;
  &-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    max-width: 500px;
    width: calc(100% - 40px);
    padding: 50px 0 10px 0;
    border-radius: 15px;
    &-form {
      padding: 0 20px;
    }
    &-action {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
    }
  }
}
</style>
