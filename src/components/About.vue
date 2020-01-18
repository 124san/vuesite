<template>
  <div class="about">
    <h2>
        About This App
    </h2>
    <p>
        This is Daniel Kong's personal web app project built with Vue.js as the front-end. Currently the back-end is using Express and the database used is MongoDB.
    </p>
    <h2>
        Features
    </h2>
    <p>
        This app supports a simple login/logout feature. By clicking on "Login" at the top-right corner, you will be redirected to the login page.
    </p>
    <p>
        The register page is fully working, so you can create a brand new account by clicking the <router-link :to="{ path: '/register'}">register</router-link> link, and then login with the new credential.
    </p>
    <p>
        The "description" is a field for user. Descriptions are stored in database along with their corresponding users. Once logged in, you can change the description in the dashboard page. To access the dashboard page,
         click your username at top-right corner when logged in.
    </p>
    <p>
        To logout, go to dashboard page and click "logout" button.
    </p>
    <p>
      RPG page and dashboard page are protected by authentication. When not logged in, those page cannot be accessed, and trying to access those pages will result in being redirected to login page.
    </p>
    <p>
      Vue.js-Test page currently has a simple simulator for <a href="https://hearthstone.gamepedia.com/Mass_Hysteria">Mass Hysteria</a>, a card from the card game HearthStone. You can create some creatures with attack and defense and then let them fight 
      each other randomly. Each creature is labeled by a unique ID, so you can see which creatures survive the battle and which bite the dust.
    </p>
    <p>
      RPG page has a sample RPG project made by me. It is accessable when logged in.
    </p>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 28px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
