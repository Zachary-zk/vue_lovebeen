import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopData: [],
    isAdd: {}
  },
  mutations: {
    getItem (state) {
      state.shopData = JSON.parse(localStorage.getItem('shopData')) || []
      state.isAdd = JSON.parse(localStorage.getItem('isAdd')) || {}
    },
    addShop (state, obj) {
      if (state.isAdd[obj.id]) {
        state.isAdd[obj.id]++
      } else {
        Vue.set(this.state.isAdd, obj.id, 1)
        // state.isAdd[obj.id] = 1
        obj.isMai = true
        state.shopData.push(obj)
      }
    },
    lessShop (state, id) {
      state.isAdd[id]--
      if (state.isAdd[id] <= 0) {
        const index = state.shopData.findIndex(v => v.id === id)
        state.shopData.splice(index, 1)
        delete state.isAdd[id]
      }
    },
    changeMai (state, { id, bool }) {
      const index = state.shopData.findIndex(v => v.id === id)
      const obj = state.shopData.find(v => v.id === id)
      obj.isMai = !bool
      state.shopData.splice(index, 1, obj)
      // Vue.set(index, 'isMai', !bool)
      // state.shopData.push('zk')
      // state.shopData.splice(state.shopData.length - 1, 1)
    },
    // 全选 / 全不选
    selectAll (state, bool) {
      state.shopData.forEach((v) => {
        v.isMai = bool
        state.shopData.push('zk')
        state.shopData.splice(state.shopData.length - 1, 1)
      })
    }
  },
  actions: {

  },
  getters: {
    // isSelectAll (state) {
    //   return state.shopData.every(v => v.isMai === true)
    // }
  }
})
