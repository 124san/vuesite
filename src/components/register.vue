<template>
  <div class="hello">
    <form class="register" @submit.prevent="register">
     <h1>Register</h1>
     <div class="form-group">
      <label>Username</label>
      <input required v-model="username" type="text" placeholder="Username" class="form-control"/>
     </div>
     <div class="form-group">
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Username" class="form-control"/>
     </div>
     <div class="form-group">
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password" class="form-control"/>
     </div>
     <div class="form-group">
      <label>Confirm Password</label>
      <input required v-model="confirm_pw" type="password" placeholder="Confirm Password" class="form-control"/>
     </div>
     <div class="form-group">
      <label>Description (A part of user's information that is stored in the database)</label>
      <input required v-model="description" type="text" placeholder="Description" class="form-control"/>
     </div>
     <button class="btn btn-primary" type="submit">Register</button>
   </form>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'register',
  data: function () {
    return {
      username: "",
      password: "",
      email: "",
      confirm_pw: "",
      description: ""
    }
  },
  methods: {
    register: function() {
      if (this.confirm_pw !== this.password) {
        // TODO: render password mismatch red text
        return;
      }
      var form = {username: this.username, password: this.password, description: this.description, email: this.email}
      this.$http.post('/register', form, {withCredentials: true, credentials: 'same-origin'}).then(res => {
        alert("You are registered!")
        router.push("/dashboard");
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
