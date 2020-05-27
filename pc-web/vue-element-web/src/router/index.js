import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/time',
    name: 'Time',
    component: () => import(/* webpackChunkName: "about" */ '../views/Time.vue')
  },
  {
    path: '/emoji',
    name: 'Emoji',
    component: () => import(/* webpackChunkName: "about" */ '../views/Emoji.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
