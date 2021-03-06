import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layout/layoutView.vue'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/recommend',
        name: 'recommend',
        component: () => import('../views/recommend/recommendView.vue')
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('../views/music/musicView.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video/videoView.vue')
      },
      {
        path: '/radioStation',
        name: 'radioStation',
        component: () => import('../views/radioStation/radioStation.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
