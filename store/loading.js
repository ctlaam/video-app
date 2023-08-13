// store/loading.js
export const state = () => ({
  modalLoading: false,
})

export const mutations = {
  setModalLoading(state, value) {
    state.modalLoading = value
  },
}

export const actions = {
  setModalLoading({ commit }, value) {
    commit('setModalLoading', value)
  },
}

export const getters = {
  modalLoading: (state) => state.modalLoading,
}
