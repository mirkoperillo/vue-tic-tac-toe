<!--
  tic-tac-toe - a vuejs exercise
  Written in 2021 by Mirko Perillo
  To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide.
  This software is distributed without any warranty.
  You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
-->
<template>
  <div>
    <div v-for="row in rows" :key="row" class="board-row">
      <square v-for="col in cols" :key="row * 3 + col" :row="row" :col="col" />
  </div>
  </div>
</template>

<script>
import Square from '@/components/Square'

export default {
  data() {
    return {
      rows: [0, 1, 2],
      cols: [0, 1, 2],
    }
  },
  components: {
    Square
  }
}
</script>

<style>
.board-row:after {
  clear: both;
  content: "";
  display: table;
}
</style>