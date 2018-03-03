import axios from "axios";

const API_URL = "http://localhost:3000"

export function fetchProfile() {
  return axios.get(`${API_URL}/profile`)
}

export function fetchFriends() {
  return axios.get(`${API_URL}/friends`)
}

export function fetchPosts() {
  return axios.get(`${API_URL}/posts`)
}

export function fetchFriendPostsById(friendId) {
  return axios.get(`${API_URL}/friends/${friendId}/posts`)
}
