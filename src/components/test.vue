<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>ayy</h1>
    <p>
        My name is Daniel Kong. I am a Chinese currently living and studying in Canada. As of January 2020, I am a 3nd year student
        in University of Toronto St. George campus.
    </p>
    <p>
        I am a gamer, but not the hardcore type. I can play most games at decent skill level, but I cannot compete with the
        high-level players in those games. Out of all the games I played, modern Tetris is the game I had most skill in.
        My current record of sprint in (clearing 40 lines) Tetris is 33.395s, which is at medium-high level. You can check
        my Tetris profile right <a href="https://jstris.jezevec10.com/u/124san">here</a>.
    </p>
    <p>
        I used to be a semi-competitive player in Pokemon Trading Card Games (PTCG), and I was quite competent. However, as competing
        for World Championships qualification cost way too much time, I quit playing it.
    </p>
    <h2>
        Some facts about me
    </h2>
    <ul>
        <li>Favorite food: most Japanese cuisines (such as sushi, donburi, tempura, etc.), Peking duck, chicken wings</li>
        <li>Owned consoles: PS3, Wii U, Nintendo Switch</li>
        <li>Favorite games: Tetris, Super Robot Wars Series, MapleStory, Trading Card Games
            , Xenoblade Chronicles Series, Fire Emblem Series, Super Smash Bros
        </li>
        <li>Favorite movies: Kung Fu Panda, John Wick 2, Thor Ragnarok, The Lego Movie, Big Hero 6, The Avengers End Game (of course)</li>
        <li>Most favorite fictional characters: <a href="favoriteFicChars.html">here</a></li>
    </ul>
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
