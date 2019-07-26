<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body {
    /* min-height: 720px; */
    height:100%;
    padding: 0;
    margin:0;
    
    overflow-x: auto;
   }
   *{margin:0;padding:0;border:0;outline:0;font-size:1em}
*:before, *:after {
    box-sizing: border-box;
}

#app {
  /* background:url('../static/img/stats-bg.png') center center no-repeat;
  background-size:cover; */
  color:#D5E5ED;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   height: 100%;
   width: 100%;
   padding: 0;
   margin:0;
   position: relative;
   display: block;
}
</style>
