<template>
  <div id="nav">
    <router-link to="/helloworld">Sample</router-link> |
    <router-link to="/test/safsfsdf">Event Sample</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
