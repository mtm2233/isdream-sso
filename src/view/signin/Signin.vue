<!--
 * @Description: 
 * @Author: mTm
 * @Date: 2021-05-04 20:57:03
 * @LastEditTime: 2021-05-04 22:55:18
 * @LastEditors: mTm
-->
<template>
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
      <AInputPassword v-model:value="formState.password" />
    </AFormItem>
    <AFormItem :wrapper-col="{ span: 18, offset: 6 }">
      <AButton type="primary" @click="onSubmit">注册</AButton>
      <AButton style="margin-left: 10px" @click="resetForm">重置</AButton>
    </AFormItem>
  </AForm>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import { rules } from './config/index'

import useSignin from './useSignin'

export default defineComponent({
  name: 'Signin',
  setup() {
    const userInput = ref()

    onMounted(() => {
      userInput.value.focus()
    })

    return {
      ...useSignin.values(),
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      rules,
      userInput,
    }
  },
})
</script>
