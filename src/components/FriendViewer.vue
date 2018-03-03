<template>
  <div>
    <section style="margin-top: 1rem; margin-bottom: 1rem;" v-if="selectedFriend!==null">
      <div class="is-flex" style="align-items: center;flex-direction: row;">
        <figure class="image is-128x128">
          <img :src="selectedFriend.thumbnail">
        </figure>
        <div style="margin-left: 2rem;">
          <h1 class="title" style="margin-top: 1rem;">{{selectedFriend.name}}</h1>
          <div class="is-size-5 has-text-black">{{selectedFriend.email}}</div>
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
      <div class="box" v-for="post in selectedFriend.posts" :key="post.id" v-if="selectedFriend.posts.length!==0">
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
                  <router-link :to="{name:'FriendViewer', params:{friendId:post.friendId}}">{{post.name}}</router-link>
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
  import {mapGetters} from 'vuex'
    export default {
        name: "friend-viewer",
      computed:{
        ...mapGetters({
          selectedFriend:'getSelectedFriend'
        })
      }
    }
</script>

<style scoped>

</style>
