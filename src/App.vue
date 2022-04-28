<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navToIndex () {
      this.$router.push({
        path: '/index'
      })
    },
    navToLogin () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style>
  html, body{
    margin: 0;
    padding: 0;
  }

  .header{
    background-color: red;
  }

  .tabbar{
    background-color: blue;
  }

  .main{
    background-color: yellow;
  }
</style>
