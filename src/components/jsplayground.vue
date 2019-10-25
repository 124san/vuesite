<template>
  <div id='jsplayground'>
    <h2>Hearthstone Mass Hysteria Calculator</h2>
    Attack:
    <input v-model="Atk">
    <br>
    Health:
    <input v-model="HP">
    <br>
    <br>
    <button v-on:click="add1" class="btn btn-primary">Add</button>
    <button v-on:click="empty" class="btn btn-primary">Empty</button>
    <button v-on:click="fite" class="btn btn-primary">Fite!</button>
    <p>ATK:{{ Atk }}, HP: {{HP}}</p>
    <ul id="v-for-object" class="demo">
      <li v-for="value in Arr">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'jsplayground',
  data: function () {
    return {
      Atk: 1,
      HP: 1,
      Arr: []
    }
  },
  methods: {
    add1: function () {
      var tup = [parseInt(this.Atk), parseInt(this.HP)]
      this.Arr.push(tup)
    },
    empty: function () {
      this.Arr = [];
    },
    fite: function() {
      // Skip each minion that already fite
      alert("Ready? Set? Go!")
      let skipped = []
      for (let i = 0; i < this.Arr.length; i++) {
        skipped.push(false)
        
      }
      
      // fcn
      var done = function(skipped) {
        for (let i = 0; i < skipped.length; i++) {
          if (!skipped[i]) {
            return false;
          }
          
        }
        return true;
      }
      
      while (!done(skipped) && this.Arr.length !== 0) {
        // Get array of possible attackers
        
        let attackers = [];
        for (let i = 0; i < this.Arr.length; i++) {
          if (!skipped[i]) {
            // Push index of attacker
            attackers.push(i);
          }
        }
        
        let getAttacker = Math.floor(Math.random() * attackers.length);
        let attacker = attackers[getAttacker]
        
        // Get array of possible defenders
        let defenders = []
        for (let i = 0; i < this.Arr.length; i++) {
          if (i !== attacker && this.Arr[i][1] >= 1) {
            defenders.push(i)
          }
        }
        // Fite if there is a defender
        if (defenders.length > 0) {
          let getDefender = Math.floor(Math.random() * defenders.length);
          let defender = defenders[getDefender]
          /*
          alert("Atkers:"+attackers)
          alert("Atker:"+attacker)
          alert("Defers:"+defenders)
          alert("Defer:"+defender)
          alert("Atker health:"+this.Arr[attacker][1])
          alert("Defer health:"+this.Arr[defender][1])
          */
          //Fite!
          this.Arr[attacker][1] -= this.Arr[defender][0]
          this.Arr[defender][1] -= this.Arr[attacker][0]
          if (this.Arr[defender][1] <= 0) {
            skipped[defender] = true
          }
        }

        skipped[attacker] = true
      }

      // Delete death
      for (let i = this.Arr.length - 1; i >= 0; i--) {
        if (this.Arr[i][1] <= 0) {
          this.Arr.splice(i, 1)
        }
      }
      this.Arr.push(3)
      this.Arr.pop()
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-right: 5px;
}
</style>
