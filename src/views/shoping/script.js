export default {
  data () {
    return {
      selectAll: true
    }
  },
  methods: {
    // 添加商品
    addShop (obj) {
      this.$store.commit('addShop', obj)
    },
    // 减少商品
    lessShop (id) {
      this.$store.commit('lessShop', id)
    },
    // 是否选中
    changeMai (id, bool) {
      this.$store.commit('changeMai', { id, bool })
    },
    // 是否全选
    isAll () {
      this.selectAll = !this.selectAll
      this.$store.commit('selectAll', this.selectAll)
    }

  },
  computed: {
    DataObj () {
      return this.$store.state.shopData
    },
    dataObjNum () {
      return this.$store.state.isAdd
    },
    meny () {
      return this.$store.state.shopData.reduce((pre, v, i) => {
        if (v.isMai) {
          return pre + (v.partner_price || 0) * (this.$store.state.isAdd[v.id] || 0)
        } else {
          return pre
        }
      }, 0)
    }
  },
  watch: {
    selectAll (val) {
      // this.$store.commit('selectAll', val)
    },
    DataObj: {
      handler: function (val, oldVal) {
        // console.log('zk', val, oldVal)
        this.selectAll = val.every(v => v.isMai)
      },
      deep: true
    }

  }
}
