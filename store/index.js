export const state = () => ({
    isLogin: false
})

export const mutations = {
    checkLogin(state, isLogin) {
      state.isLogin = isLogin;
    }
}