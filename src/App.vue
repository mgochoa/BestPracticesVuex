<template>
  <div id="app" class="container is-fluid">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'App',
    methods: {
      ...mapActions(['fetchInitialData'])
    },
    mounted() {
      this.fetchInitialData()
    }
  }
</script>

<style>
</style>
