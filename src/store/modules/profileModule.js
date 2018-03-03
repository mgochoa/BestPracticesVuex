export default {
  namespaced: true,
  state: {
    profile: null
  },
  getters: {
    getProfile: state => {
      return state.profile
    },
  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile
    },
  },
  actions: {}
}

