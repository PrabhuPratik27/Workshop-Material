import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Data from './views/MethodsAndData.vue'
import DataBinding from './views/DataBinding.vue'
import Events from './views/Events.vue'
import TwoWay from './views/TwoWayBinding.vue'
import Computed from './views/Computed.vue'
import Dynamic from './views/DynamicCSS.vue'
import For from './views/Looping.vue'
import If from './views/Conditionals.vue'
import Component from './views/Component.vue'
import Slot from './views/Slot.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/data-and-methods',
      name: 'data-and-methods',
      component: Data
    },
    {
      path: '/data-binding',
      name: 'data-binding',
      component: DataBinding
    },
    {
      path: '/two-way-binding',
      name: 'two-way-binding',
      component: TwoWay
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed
    },
    {
      path: '/dynamic-css',
      name: 'dynamic-css',
      component: Dynamic
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: For
    },
    {
      path: '/v-if',
      name: 'v-if',
      component: If
    },
    {
      path: '/components',
      name: 'components',
      component: Component
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    }
  ]
})
