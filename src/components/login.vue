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
     <button class="btn btn-primary" type="submit">Login</button>
   </form>
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
      this.$http.post('/login', form, {withCredentials: true}).then(res => {
        alert("Logged in!")
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
a {
  color: #42b983;
}
</style>
