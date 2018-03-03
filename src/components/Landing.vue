<template>
  <div>
    <section style="margin-top: 1rem; margin-bottom: 1rem;" v-if="profile!==null">
      <div class="is-flex" style="align-items: center;flex-direction: row;">
        <figure class="image is-128x128">
          <img :src="profile.thumbnail">
        </figure>
        <div style="margin-left: 2rem;">
          <h1 class="title" style="margin-top: 1rem;">{{profile.name}}</h1>
          <div class="is-size-5 has-text-black">{{profile.alias}}</div>
          <div class="is-size-5 has-text-black">{{profile.email}}</div>
        </div>

      </div>
    </section>


    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Feedback
          </h1>
        </div>
      </div>
    </section>
    <div style="width: 100%;">
      <div class="box" v-for="post in posts" :key="post.id" v-if="posts.length!==0">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="post.thumbnail" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  <a @click="viewFriend(post.friendId)">{{post.name}}</a>
                </strong>
                <br>
                {{post.content}}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>


</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "landing",
    data() {
      return {}
    },
    methods: {
      viewFriend(friendId) {
        this.$store.dispatch('setSelectedFriend', friendId)
        this.$router.push({name: 'FriendViewer', params: {friendId: friendId}})
      }
    },
    computed: {
      ...mapGetters({
        posts: 'getFeedback',
        profile: 'getProfile'
      })
    }
  }
</script>

<style scoped>

</style>
