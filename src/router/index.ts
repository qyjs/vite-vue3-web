import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/view/home.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('@/view/hello.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/view/orders.vue')
  },
  {
    path: '/',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
