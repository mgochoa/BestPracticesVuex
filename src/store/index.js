import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let endpoint = "http://localhost:3000"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  friends: [],
  profile: null,
  selectedFriend: null,
  cityFilters: [],
  feedback: []
}
const getters = {
  getFriends: state => {
    return state.friends
  },
  getProfile: state => {
    return state.profile
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
  SET_PROFILE(state, profile) {
    state.profile = profile
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
const actions = {
  fetchInitialData({commit}) {
    axios.get(`${endpoint}/profile`)
      .then(response => {
        commit('SET_PROFILE', response.data)
      })
    axios.get(`${endpoint}/friends`)
      .then(response => {
        commit('SET_FRIENDS', response.data)
      })
    axios.get(`${endpoint}/posts`)
      .then(response => {
        commit('SET_FEEDBACK', response.data)
      })
  },
  fetchFriendDataById({commit}, friendId) {
    axios.get(`${endpoint}/friends/${friendId}/posts`)
      .then(response => {
        commit('SET_SELECTED_FRIEND_POSTS', response.data)
      })
  },
  setSelectedFriend({commit, getters, dispatch}, friendId) {
    let selectedFriend
    getters.getFriends.forEach(friend => {
      if (friend.id === friendId) {
        selectedFriend = friend
      }
    })
    dispatch('fetchFriendDataById', selectedFriend.id)
    commit('SET_SELECTED_FRIEND', selectedFriend)
  }

}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
})
