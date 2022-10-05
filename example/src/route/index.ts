import { createRouter, createWebHistory } from 'vue-router'
import notFound from '../pages/not-found/not-found.vue'
import avatar from '../components/avatar/avatar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/avatar',
      component: avatar,
    },
    { path: '/:pathMatch(.*)*', component: notFound },
  ],
})

export default router
