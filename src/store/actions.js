import {fetchProfile, fetchFriendPostsById, fetchPosts, fetchFriends} from '../utils/api'

export default {
  async fetchInitialData({commit}) {

    const [profileResponse, friendsResponse, postsResponse] = await Promise.all([fetchProfile(), fetchFriends(), fetchPosts()])
    commit('SET_PROFILE', profileResponse.data)
    commit('SET_FRIENDS', friendsResponse.data)
    commit('SET_FEEDBACK', postsResponse.data)

  },
  async fetchFriendDataById({commit}, friendId) {
    const postsFromFriend = await fetchFriendPostsById(friendId)
    commit('SET_SELECTED_FRIEND_POSTS', postsFromFriend.data)

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

