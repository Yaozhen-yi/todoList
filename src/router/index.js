import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Login.vue')
    },
    {
      path: '/todoview',
      name: 'todoview',
      component: () => import('../components/ToDoView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/reginster.vue')
    },
  ]
})

export default router
