import { login } from '@/api/login'
import {
  setToken,
  getToken,
  removeToken,
  setTokenTime
}
  from '@/utils/utils'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  // 设置token
  setToken (state:any, payload:any) {
    state.token = payload
    setToken(payload)
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
    console.log(res)
    // 存登录的时间戳
    setTokenTime()
    context.commit('setToken', res.data.cookie)
  },
  // 获取用户资料
  async getUserInfo (context:any) {
    // const res = await getUserInfo()
    // const userInfo = await getUserInfoById(res.userId)
    // context.commit('setUserInfo', { ...res, ...userInfo })
    // return res
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
