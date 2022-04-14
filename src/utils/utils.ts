import Cookies from 'js-cookie'
const token = 'music-token'
const userName = 'name'
const userPhoto = 'photo'
// 保存token
export function setToken (payload: string) {
  return Cookies.set(token, payload)
}
export function getToken () {
  return Cookies.get(token)
}

export function removeToken () {
  return Cookies.remove(token)
}
// 保存用户姓名
export function setUserInfo (payload: string) {
  return Cookies.set(userName, payload)
}
export function getUserName () {
  return Cookies.get(userName)
}

export function removeUserInfo () {
  return Cookies.remove(userName)
}
// 保存用户头像
export function setUserPhoto (payload: string) {
  return Cookies.set(userPhoto, payload)
}
export function getUserPhoto () {
  return Cookies.get(userPhoto)
}

export function removeUserPhoto () {
  return Cookies.remove(userPhoto)
}
