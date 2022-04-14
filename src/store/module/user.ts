/* eslint-disable @typescript-eslint/no-explicit-any */
import { login } from '@/api/login'
import {
  setToken,
  setUserInfo,
  setUserPhoto,
  removeToken
}
  from '@/utils/utils'
const state = {
  token: '',
  userInfo: {}
}
const mutations = {
  // 设置token
  setToken (state:any, payload:any) {
    state.token = payload
    setToken(payload)
  },
  // 保存个人信息
  setUserInfo (state:any, payload:any) {
    state.userInfo = payload
    setUserInfo(payload.nickname)
    setUserPhoto(payload.avatarUrl)
  },
  // 退出登录
  logout (state:any) {
    state.token = null
    state.userInfo = {}
    removeToken()
  }
}
const actions = {
  // 登录
  async login (context:any, payload:any) {
    const res = await login(payload)
    console.log(res, '111')
    context.commit('setToken', res.data.cookie)
    context.commit('setUserInfo', res.data.profile)
  },
  logout (context: { commit: (arg0: string) => void }) {
    context.commit('logout')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
