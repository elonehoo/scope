import { createRouter, createWebHistory } from 'vue-router'
import notFound from '../pages/not-found/not-found.vue'
import avatar from '../components/avatar/avatar.vue'
import button from '../components/button/button.vue'
import preloader from '../components/icons/preloader/preloader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/avatar',
      component: avatar,
    },
    {
      path: '/button',
      component: button,
    },
    {
      path: '/icon-preloader',
      component: preloader,
    },
    { path: '/:pathMatch(.*)*', component: notFound },
  ],
})

export default router
