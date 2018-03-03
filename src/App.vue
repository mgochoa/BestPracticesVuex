<template>
  <div id="app" class="container is-fluid">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
      this.$store.dispatch('fetchInitialData')
    }
  }
</script>

<style>
</style>
