
<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.username }}</p>
    <p>Description: {{ user.description }}</p>
    <div class="form-group">
      <label>Modify Description:</label>
      <input v-model="newDescription" class="form-control"/>
    </div>
    <button v-on:click="modifyDescription" id="modify-btn" class="btn btn-primary">Modify</button>
    <button v-on:click="logout" class="btn btn-primary">Logout</button>
  </div>
</template>
<script>
import router from "../router";
export default {
  name: "dashboard",
  data() {
    return {
      user: {
        name: "Jesse"
      },
      newDescription: ""
    };
  },
  methods: {
    getUserData: function() {
      this.$http.get("/users/current", { withCredentials: true, credentials: 'same-origin' }).then(response => {
        this.$set(this, "user", response.data);
      }).catch(errors => {
        console.log(errors);
        router.push("/");
      });
    },
    logout: function() {
      router.push("/logout");
      Vue.forceUpdate();
    },
    modifyDescription: function() {
      this.$http.put("/users/" + this.user._id, { description: this.newDescription }).then(res => {
        this.$set(this, "user", res.data);
      }).catch(err => {
        console.log(err);
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
#modify-btn {
  margin-right: 10px;
}
</style>