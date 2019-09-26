<template>

  <div id="nav">
    <div class="linkholder">
      <router-link class="link" to="/">Front</router-link>
      <router-link class="link" to="/about">About</router-link>
      <router-link class="link" to="/rpg">RPG</router-link>
      <!-- <router-link class="link" to="/test/J">test</router-link> -->
      <router-link class="link" to="/jsplayground">JS Playground</router-link>
      <router-link class="link" to="/helloworld" style="float: right">Hello World</router-link>
    </div>

  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'TopBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
  text-decoration: none;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  float: left;
  display: block;
  text-align: center;
  font-size: 25px;
  padding: 11.5px 11.5px;
}
a:hover {
  background-color: #80bfff;
  color: #fefefe;
}

#nav {
  background-color: #66b3ff;
  height: 60px;
  overflow: hidden;
  text-align: left;
  
}
</style>
