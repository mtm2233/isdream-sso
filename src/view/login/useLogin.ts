/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-03 17:23:51
 * @LastEditTime: 2021-11-03 20:53:47
 * @LastEditors: mTm
 */
import { reactive, ref, UnwrapRef } from 'vue'
import { FormState } from './config/interface'

import { store } from '@/store'
import { router } from '@/router'
import config from '@/config'

import { login } from '@/api/user'

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
        store.commit('setToken', { token: res.token, isdb: true })
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
