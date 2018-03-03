import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import FriendViewer from '@/components/FriendViewer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/friend/:friendId',
      name: 'FriendViewer',
      component: FriendViewer
    }
  ]
})
