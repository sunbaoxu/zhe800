import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home/Home'
import Search from '@/components/page/search/Search'
import Mine from '@/components/page/mine/Mine'
import shoppingCart from '@/components/page/shoppingCart/shoppingCart'
import store from '@/components/page/store/store'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/store',
      name: 'store',
      component: store
    }
  ]
})
