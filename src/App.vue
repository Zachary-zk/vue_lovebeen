<template>
  <div id="app">
    <header>
      <h1>黑马程序员-上海校区（全端学院）</h1>
    </header>
    <router-view/>
    <footer>
      <ul>
        <li v-for="(item, index) in msg" :key="index">
          <router-link :to="item.path1">
            <img :src="$route.path === item.path1? item.path2:item.path" alt>
            <p>{{ item.name}}</p>
            <div v-if="item.path1 === '/shoping'" class="navs-bubble navs-bubble-num">{{zongShopNum}}</div>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: [
        {
          path: require('./assets/images/menu-icon/navs-item-home.png'),
          path2: require('./assets/images/menu-icon/navs-item-home-active.png'),
          name: '首页',
          path1: '/'
        },
        {
          path: require('./assets/images/menu-icon/navs-item-menu.png'),
          path2: require('./assets/images/menu-icon/navs-item-menu-active.png'),
          name: '闪电超市',
          path1: '/list'
        },
        {
          path: require('./assets/images/menu-icon/navs-item-cart.png'),
          path2: require('./assets/images/menu-icon/navs-item-cart-active.png'),
          name: '购物车',
          path1: '/shoping'
        },
        {
          path: require('./assets/images/menu-icon/navs-item-mine.png'),
          path2: require('./assets/images/menu-icon/navs-item-mine-active.png'),
          name: '我的',
          path1: '/minu'
        }
      ]
    }
  },
  computed: {
    zongShopNum () {
      let num = 0
      for (let key in this.$store.state.isAdd) {
        num += this.$store.state.isAdd[key]
      }

      return num
    }
  }

}
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
</style>

<style lang="less" scoped>
header {
  background-color: #ffd600;
  height: 4.5rem;

  h1 {
    height: 4.5rem;
    line-height: 4.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
  }
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  ul {
    display: flex;

    li {
      width: 25%;
      text-align: center;

      a {
        display: block;
        position: relative;

        img {
          width: 2rem;
        }
      }
    }
  }
}

.navs-bubble {
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 0rem;
  margin-left: 1rem;
}

.navs-bubble-num {
  background-color: #f40;
  color: #fff;
  line-height: 1.8rem;
  width: 1.8rem;
  text-align: center;
  font-size: 1rem;
}
</style>
