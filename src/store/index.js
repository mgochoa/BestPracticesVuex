import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import profileModule from './modules/profileModule'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  friends: [],
  selectedFriend: null,
  cityFilters: [],
  feedback: []
}
const getters = {
  getFriends: state => {
    return state.friends
  },
  getSelectedFriend: state => {
    return state.selectedFriend
  },
  getCityFilters: state => {
    return state.cityFilters
  },
  getFeedback: state => {
    return state.feedback
  }
}
const mutations = {
  SET_FRIENDS(state, friends) {
    state.friends = friends
  },
  SET_SELECTED_FRIEND(state, friend) {
    state.selectedFriend = friend
  },
  SET_CITY_FILTERS(state, cityFilters) {
    state.cityFilters = cityFilters
  },
  SET_FEEDBACK(state, feedback) {
    state.feedback = feedback
  },
  SET_SELECTED_FRIEND_POSTS(state, posts) {
    Vue.set(state.selectedFriend, 'posts', posts)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    profile: profileModule
  },
  strict: debug
})
