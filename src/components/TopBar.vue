<template>

  <div id="nav">
    <div class="linkholder">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/about">About</router-link>
      <router-link class="link" to="/rpg">RPG</router-link>
      <!-- <router-link class="link" to="/test/J">test</router-link> -->
      <router-link class="link" to="/vuejstest">Vue.js-Test</router-link>
      <router-link class="link" to="/login" style="float: right">{{ username }}</router-link>
    </div>

  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: "TopBar",
  data() {
    return {
      username: "Login",
    };
  },
  methods: {
    getUserData: function() {
      this.$http.get("/users/current", { withCredentials: true, credentials: 'same-origin' }).then(response => {
        this.$set(this, "username", response.data.username);
      }).catch(errors => {
        this.$set(this, "username", "Login");
        console.log(errors);
      });
    }
  },
  mounted() {
    this.getUserData();
  }
};
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
