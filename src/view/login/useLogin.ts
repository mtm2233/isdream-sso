/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 17:23:51
 * @LastEditTime: 2021-05-04 17:18:22
 * @LastEditors: mTm
 */
import { reactive, ref, UnwrapRef } from 'vue'
import { FormState } from './config/interface'

import { store } from '@/store'
import { router } from '@/router'
import config from '@/config'

import { login } from '@/api/login'

class UseLogin {
  public formState: UnwrapRef<FormState> = reactive({
    user: undefined,
    password: undefined,
  })
  public formRef = ref()

  constructor() {
    this.init()
  }

  init = () => {
    return false
  }

  onSubmit = () => {
    this.formRef.value.validate().then(() => {
      login(this.formState).then(res => {
        store.commit('setToken', res.token)
        router.push({ name: config.mainName })
      })
    })
  }

  resetForm = () => {
    this.formRef.value.resetFields()
  }

  values = () => {
    const { formState, formRef, onSubmit, resetForm, init } = this
    return {
      formState,
      formRef,
      onSubmit,
      resetForm,
      init,
    }
  }
}

export default new UseLogin()
