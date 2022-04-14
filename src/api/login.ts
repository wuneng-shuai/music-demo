/* eslint-disable @typescript-eslint/no-explicit-any */
import serve from '../utils/serve'

export const login = (params: any) => {
  return serve({
    url: '/login/cellphone',
    params
  })
}
// 二维码 key 生成接口
export const getLoginKye = () => {
  return serve({
    url: '/login/qr/key'
  })
}
// 二维码生成接口
export const getQrCreate = (params: any) => {
  return serve({
    url: '/login/qr/create',
    params
  })
}
