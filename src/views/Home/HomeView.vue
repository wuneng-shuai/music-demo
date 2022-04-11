/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div class="home_content">
    <div class="login_form">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="登陆账号" width="100px">
          <el-input v-model="ruleForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登陆</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>   </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { login } from '../../api/login'
import { useStore } from 'vuex'
import router from '@/router'
const store = useStore()
const ruleFormRef = ref<FormInstance>()
// 表单数据
const ruleForm = reactive({
  phone: '15660822700',
  password: 'Ys990724gxy'
})
// 登陆方法
const submitForm = (formEl: { validate: (arg0: (valid: any) => Promise<false | undefined>) => void; }) => {
  formEl.validate(async (valid: any) => {
    if (valid) {
      const res = await login(ruleForm)
      store.commit('userId', res.data.token)
      router.push('/layout')
    } else {
      return false
    }
  })
}
// 重置表达
const resetForm = (formEl: { resetFields: () => void; }) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang="scss">
.home_content {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(../../assets/bg.jpeg) center center no-repeat;
  background-size: 100% 100%;

  .login_form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .el-input {
      .el-input__inner {
        width: 300px;
      }
    }
  }
}
</style>
