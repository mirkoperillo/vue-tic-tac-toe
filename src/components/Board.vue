<template>
  <div>
    <div v-for="row in rows" :key="row">
      <square v-for="col in cols" :key="row * col" />
  </div>
  </div>
</template>

<script>
import Square from '@/components/Square'
export default {
  data() {
    return {
      rows: [0, 1, 2],
      cols: [0, 1, 2]
    }
  },
  components: {
    Square
  }
}
</script>