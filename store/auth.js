// store/auth.js
export const state = () => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  userId: null,
  timeValid: null,
})


export const getters = {
  // Định nghĩa getter để lấy access token từ state
  accessToken: (state) => state.token,
}
export const mutations = {
  setAuthentication(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  setTokens(state, { accessToken, refreshToken }) {
    state.accessToken = accessToken
    state.refreshToken = refreshToken
  },
  setUserId(state, userId) {
    state.userId = userId
  },
  setTimeValid(state, timeValid) {
    state.timeValid = timeValid
  },
}

export const actions = {
  login({ commit }, { accessToken, refreshToken, userId, timeValid }) {
    // Set authentication status and tokens
    commit('setAuthentication', true)
    commit('setTokens', { accessToken, refreshToken })
    commit('setUserId', userId)
    commit('setTimeValid', timeValid)


  },
  logout({ commit }) {
    // Clear authentication status and tokens
    commit('setAuthentication', false)
    commit('setTokens', { accessToken: null, refreshToken: null })
    commit('setUserId', null)
    commit('setTimeValid', null)
  },
  refreshToken({ commit }, accessToken) {
    // Set authentication status and tokens
    commit('setTokens', { accessToken })
  }
}
