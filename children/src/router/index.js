import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Info from '../views/Info.vue'

const routes = [
  {
    path: '/user',
    name: 'User',
    component: User,
    children: [
      {
        path: ':id',
        name: 'Info',
        component: Info
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
