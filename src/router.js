import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shoping',
      name: 'shoping',
      component: () => import('./views/shoping/Shoping.vue')
    }
  ]
})
