import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserLayoutView from '@/views/UserLayoutView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ResourceNotFoundView from '@/views/ResourceNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users/:id',
      name: 'user-layout',
      component: UserLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'user-profile',
          component: UserProfileView,
          props: true
        },
        {
          path: 'posts',
          name: 'user-posts',
          component: UserPostsView,
          props: true
        }
      ]
    },
    {
      path: '/404/:resource',
      name: 'resource-not-found',
      component: ResourceNotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router