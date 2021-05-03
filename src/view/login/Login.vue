<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-03 16:13:37
 * @LastEditTime: 2021-05-03 17:53:31
 * @LastEditors: mTm
-->
<template>
  <div class="login">
    <div class="login-box">
      <AForm
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <AFormItem label="用户名" name="user">
          <AInput ref="userInput" v-model:value="formState.user" />
        </AFormItem>
        <AFormItem label="密码" name="password">
          <AInput v-model:value="formState.password" type="password" />
        </AFormItem>
        <AFormItem :wrapper-col="{ span: 18, offset: 6 }">
          <AButton type="primary" @click="onSubmit">登录</AButton>
          <AButton style="margin-left: 10px" @click="resetForm">重置</AButton>
        </AFormItem>
      </AForm>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import { rules } from './config/index'

import useLogin from './useLogin'

export default defineComponent({
  name: 'Login',
  setup() {
    const userInput = ref()
    const { formState, formRef, onSubmit, resetForm } = useLogin.values()

    onMounted(() => {
      userInput.value.focus()
    })

    return {
      formState,
      formRef,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      rules,
      onSubmit,
      resetForm,
      userInput,
    }
  },
})
</script>
<style scoped lang="less">
.login {
  height: 100%;
  &-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 500px;
    padding: 50px 100px 10px 100px;
    border-radius: 15px;
  }
}
</style>