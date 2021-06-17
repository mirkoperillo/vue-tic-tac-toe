/*
  tic-tac-toe - a vuejs exercise
  Written in 2021 by Mirko Perillo
  To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide.
  This software is distributed without any warranty.
  You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Snapshot from '@/model/snapshot'

export default new Vuex.Store({
  state: {
    xIsNext: true,
    historyList: [
      new Snapshot(0, {}, Array(9).fill(''))
    ],
    grid: Array(9).fill(''),
    sortHistoryAscending: true,
    gameOver: false,
    playerWinner: '',
    lineWinner: [],
    move: 0,
    historyMove: false
  },
  mutations: {
    newTurn(state) {
      state.xIsNext = !state.xIsNext
      state.move += 1
    },
    updateGrid(state, { player, location }) {
      const index = location.row * 3 + location.col
      state.grid[index] = player
    },
    updateHistory(state, { move, turnGrid, location }) {
      state.historyList = [...state.historyList.slice(0,move), new Snapshot(move, location, turnGrid)]
    },
    sortHistory(state) {
      state.sortHistoryAscending = !state.sortHistoryAscending
    },
    gameOver(state) {
      state.gameOver = true
    },
    winner(state, winner) {
      state.playerWinner = winner.player
      state.lineWinner = winner.line
    },
    setGrid(state, grid) {
      state.grid = grid
    },
    currentMove(state, move) {
      state.move = move
    },
    historyMove(state, isHistoryMove) {
      state.historyMove = isHistoryMove
    },
    xIsNext(state, xIsNext) {
      state.xIsNext = xIsNext
    }
  },
  actions: {
    playTurn({ commit, getters }, { player, location }) {
      commit('newTurn')
      commit('updateGrid', { player, location })
      commit('updateHistory', {move: getters.currentMove, turnGrid: getters.grid, location })
      commit('historyMove', false)
    },
    sortHistory({ commit }) {
      commit('sortHistory')
    },
    gameOver({ commit }) {
      commit('gameOver')
    },
    setWinner({ commit }, winner) {
      commit('winner', winner)
    },
    jumpToHistoryMove({ commit, getters }, move) {
      commit('currentMove', move),
      commit('setGrid', getters.historyList[move].grid.slice())
      commit('historyMove', true)
      commit('xIsNext', move % 2 === 0)
    }
  },
  modules: {
  },
  getters: {
    currentPlayer(state) {
      return state.xIsNext ? 'X' : 'O'
    },
    historyList(state) {
      return state.historyList
    },
    grid(state) {
      return state.grid
    },
    sortHistoryAscending(state) {
      return state.sortHistoryAscending
    },
    gameOver(state) {
      return state.gameOver
    },
    tie(state) {
      return state.historyList.length === 10
    },
    playerWinner(state) {
      return state.playerWinner
    },
    lineWinner(state) {
      return state.lineWinner
    },
    currentMove(state) {
      return state.move
    },
    historyMove(state) {
      return state.historyMove
    }
  }
})
