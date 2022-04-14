// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token:any) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
// 以下方法是操作token时间的
export function setTokenTime () {
  return Cookies.set('token_time', Date.now())
}

export function getTokenTime () {
  return Cookies.get('token_time')
}
