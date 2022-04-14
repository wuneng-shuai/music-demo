import { createStore } from 'vuex'
import user from './module/user'
interface IRootState {
  count: number
}

const store = createStore<IRootState>({
  // 定义state的类型限定
  modules: {
    user
  }
})
export default store
