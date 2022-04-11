import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/layoutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
