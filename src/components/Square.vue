<template>
  <button class="square" @click="move">{{value}}</button>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    move() {
      this.value = 'X'
    }
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
</style>