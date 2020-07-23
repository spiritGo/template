import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/time',
    name: 'Time',
    component: () => import(/* webpackChunkName: "Time" */ '../views/Time.vue')
  }, {
    path: '/emoji',
    name: 'Emoji',
    component: () => import(/* webpackChunkName: "Emoji" */ '../views/Emoji.vue')
  }, {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
