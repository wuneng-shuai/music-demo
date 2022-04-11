/* eslint-disable @typescript-eslint/no-explicit-any */
import serve from '../utils/serve'

export const login = (params: any) => {
  return serve({
    url: '/login/cellphone',
    params
  })
}
