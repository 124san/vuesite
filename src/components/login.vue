<template>
  <div class="hello">
    <form class="login" @submit.prevent="login">
     <h1>Login</h1>
     <div class="form-group">
      <label>Username</label>
      <input required v-model="username" type="text" placeholder="Username" class="form-control"/>
     </div>
     <div class="form-group">
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password" class="form-control"/>
     </div>
     <button class="btn btn-primary" type="submit">Login</button>
   </form>
   <router-link :to="{ path: '/register'}">Don't have an account? Click here to register.</router-link>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'testPage',
  data: function () {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    login: function() {
      var form = {username: this.username, password: this.password}
      this.$http.post('/login', form, {withCredentials: true, credentials: 'same-origin'}).then(res => {
        alert("Logged in!")
        Vue.forceUpdate();
        router.push("/");
      }).catch(err => {
        console.log(err)
      })
    }
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
#regButton {
  display: inline;
}
#usernameText {
  font-weight: bold;
}
.login {
  margin-bottom: 10px;
}
</style>
