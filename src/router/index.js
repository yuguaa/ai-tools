import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/tools',
          name: 'tools',
          component: () => import('@/views/tools/index.vue')
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
