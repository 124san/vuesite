<template>
  <div id='rpg'>
    <iframe src="www/index.html">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'rpg'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainframe {
  padding: 3px;
  height: 728px;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
