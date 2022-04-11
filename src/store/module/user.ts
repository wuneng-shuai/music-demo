const user = {
  state: {
    userID: '11'
  },
  mutations: {
    userId (state: { userId: any; }, payload: any) {
      state.userId = payload
    }
  },
  actions: {}
}
export default user
