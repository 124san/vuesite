
<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.username }}</p>
    <p>Description: {{ user.description }}</p>Modify Description:
    <input v-model="newDescription" />
    <button v-on:click="modifyDescription" id="modify-btn" class="btn btn-primary">Modify</button>
    <br />
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
      this.$http.get("/users/current", { withCredentials: true }).then(response => {
        this.$set(this, "user", response.data);
      }).catch(errors => {
        console.log(errors);
        router.push("/");
      });
    },
    logout: function() {
      router.push("/logout");
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
  margin-left: 5px;
}
</style>