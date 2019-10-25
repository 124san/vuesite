<template>
  <div class="hello">
    <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Username:</label>
     <input required v-model="username" type="text" placeholder="Username"/>
     <br>
     <label>Password:</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
  </div>
</template>

<script>
export default {
  name: 'testPage',
  props: {
    msg: String
  }
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
