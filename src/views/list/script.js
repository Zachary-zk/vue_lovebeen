import jsonp from 'jsonp'
export default {
  data () {
    return {
      categories: [],
      products: {},
      listAll: [],
      // 添加商品
      isAdd: {
        id: 0
      }
    }
  },
  mounted () {
    this.getJsop()

    jsonp('http://localhost:3008/list', null, (err, data) => {
      if (err) {
        return console.log('444', err)
      }
      this.listAll = data.data.products['104751']
    })
  },
  methods: {
    getJsop () {
      jsonp('http://localhost:3008/list', null, (err, data) => {
        if (err) {
          return console.log('444', err)
        }
        // console.log(data)
        this.categories = data.data.categories
        this.products = data.data.products
      })
    },
    changelist (id) {
      this.listAll = this.products[id]
    },
    // 添加商品
    addShop (obj) {
      this.$store.commit('addShop', obj)
    },
    // 减少商品
    lessShop (id) {
      this.$store.commit('lessShop', id)
    }
  },
  computed: {
    jsShopNum () {
      return this.$store.state.isAdd
    }
  }
}
