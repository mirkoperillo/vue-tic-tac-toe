<!--
  tic-tac-toe - a vuejs exercise
  Written in 2021 by Mirko Perillo
  To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide.
  This software is distributed without any warranty.
  You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
-->
<template>
  <button @click="timeMachine" :class="{ 'history-highlight': highlight }">{{label}}</button>
</template>

<script>
import Snapshot from '@/model/snapshot'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    snapshot: Snapshot
  },
  computed: {
    highlight() {
      return this.isHistoryMove && this.move === this.snapshot.move
    },
    label() {
      return this.snapshot.move === 0 
      ? '1. Go to game start' 
      : (this.snapshot.move + 1) + '. Go to move #' + (this.snapshot.move + 1) + ` (${this.snapshot.location.col},${this.snapshot.location.row})`
    },
    ...mapGetters({
      move: 'currentMove',
      isHistoryMove: 'historyMove'
    })
  },
  methods: {
    timeMachine() {
      this.jumpToHistoryMove(this.snapshot.move)
    },
    ...mapActions([
      'jumpToHistoryMove'
    ])
  }
}
</script>
<style>
.history-highlight {
  font-weight: bold;
  background-color: red;
  color: white;
}
</style>