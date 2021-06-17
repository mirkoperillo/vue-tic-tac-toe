<!--
  tic-tac-toe - a vuejs exercise
  Written in 2021 by Mirko Perillo
  To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide.
  This software is distributed without any warranty.
  You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
-->
<template>
<div class="game">
  <div class="game-board">
    <board />
  </div>
  <div class="game-info">
    <div><sort-button/></div>
    <div>{{status}}</div>
    <ul><history-list /></ul>
  </div>
</div>
</template>

<script>
import Board from '@/components/Board'
import HistoryList from '@/components/HistoryList'
import SortButton from '@/components/SortButton'

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    status() {
      const winner = this.calculateWinner(this.grid)
      if(winner) {
        this.gameOver()
        this.setWinner(winner)
        return `Winner: ${winner.player}`
      } else if(this.tie) {
        return 'No one wins'
      }else {
        return `Next player: ${this.currentPlayer}`
      }
    },
  ...mapGetters([
    'currentPlayer',
    'grid',
    'tie'
  ])
  },
  methods: {
    calculateWinner(grid) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return {player: grid[a], line: lines[i]};
      }
    }
    return null;
    },
    ...mapActions([
      'gameOver',
      'setWinner'
  ])
  },
  components: {
    Board, HistoryList, SortButton
  }
}
</script>

<style>
.game {
  display: flex;
  flex-direction: row;
}
.game-info {
  margin-left: 20px;
}
</style>