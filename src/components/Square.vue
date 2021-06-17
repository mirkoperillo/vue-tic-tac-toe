<template>
  <button :class="[{winner: highlight}, squareClass]" @click="move">{{value}}</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Location from '@/model/location'

export default {
  props: {
      row: Number,
      col: Number
  },
  data() {
    return {
      squareClass: 'square'
    }
  },
  computed: {
    position() {
      return this.row * 3 + this.col
    },
    value() {
      if(this.currentMove > 0) { 
        return this.grid[this.position] 
      } else {
        return ''
      }
    },
    highlight() {
      return this.lineWinner.includes(this.position)
    },
    playable() {
      return this.value === ''
    },
    ...mapGetters(
      [
        'currentPlayer',
        'gameOver',
        'lineWinner',
        'grid',
        'currentMove'
      ]
    )
  },
  methods: {
    move() {
      if (this.playable && !this.gameOver) {
        this.playTurn({ player: this.currentPlayer, location: new Location(this.row, this.col) })
      }
    },
    ...mapActions([
      'playTurn'
    ])
  }
}
</script>

<style>
.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}
.square:focus {
  outline: none;
}
.kbd-navigation .square:focus {
  background: #ddd;
}

.winner {
  background-color: red;
  color: white;
}
</style>