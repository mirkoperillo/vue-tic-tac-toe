<!--
  tic-tac-toe - a vuejs exercise
  Written in 2021 by Mirko Perillo
  To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide.
  This software is distributed without any warranty.
  You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
-->
<template>
  <button @click="toggleSort">Sort {{order}}</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    toggleSort() {
      this.sortHistory()
    },
    ...mapActions([
      'sortHistory'
    ])
  },
  computed: {
    order() {
      return this.sortHistoryAscending ? 'A' : 'D'
    },
    ...mapGetters([
      'sortHistoryAscending'
    ])
  }
}
</script>