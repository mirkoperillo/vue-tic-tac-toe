<!--
  tic-tac-toe - a vuejs exercise
  Written in 2021 by Mirko Perillo
  To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide.
  This software is distributed without any warranty.
  You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
-->
<template>
  <div>
    <ul v-for="snapshot in orderedList" :key="snapshot.move">
      <history-button :snapshot="snapshot"/>
    </ul>
  </div>
</template>

<script>
import HistoryButton from '@/components/HistoryButton'
import { mapGetters } from 'vuex'

export default {
  computed: {
    orderedList() {
      return this.sortHistoryAscending ? this.historyList : this.historyList.slice().reverse()
    },
    ...mapGetters([
      'historyList',
      'sortHistoryAscending'
    ])
  },
  components: {
    HistoryButton
  }
}
</script>