<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-12-06 22:08:19
 * @LastEditTime: 2021-12-06 23:17:41
 * @LastEditors: mTm
-->
<template>
  <section :class="{ active: active }">
    <div :class="{ container: true, active: active }">
      <div class="user signinBx">
        <div class="imgBx">
          <img src="../../assets/1.jpg" alt="" />
        </div>
        <div class="formBx">
          <form>
            <h2>Sign In</h2>
            <input
              v-model="loginForm.user"
              type="text"
              placeholder="Username"
            />
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="Password"
            />
            <input type="button" value="Login" @click="login" />
            <p class="signup">
              don't have an account?
              <a href="#" @click="toggleForm">Sign up.</a>
            </p>
          </form>
        </div>
      </div>

      <div class="user signupBx">
        <div class="formBx">
          <form>
            <h2>Create an account</h2>
            <input
              v-model="signinForm.user"
              type="text"
              placeholder="Username"
            />
            <input
              v-model="signinForm.email"
              type="text"
              placeholder="Email Address"
            />
            <input
              v-model="signinForm.password"
              type="password"
              placeholder="Create Password"
            />
            <input
              v-model="signinForm.confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <input type="button" value="Sign up" @click="signin(toggleForm)" />
            <p class="signup">
              Already have an account?
              <a href="#" @click="toggleForm">Sign in.</a>
            </p>
          </form>
        </div>
        <div class="imgBx">
          <img src="../../assets/2.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import useLogin from './useLogin'
import useSignin from './useSignin'

export default defineComponent({
  name: 'Login',
  setup() {
    const active = ref(false)
    const toggleForm = () => {
      active.value = !active.value
    }

    return {
      ...useLogin.values(),
      ...useSignin.values(),
      active,
      toggleForm,
    }
  },
})
</script>
<style lang="less" scoped>
@import './style.less';
</style>
