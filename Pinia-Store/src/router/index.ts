import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import UserEditView from '@/views/UserEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/:id',
      name: 'user-detail',
      component: UserDetailView,
      props: true,
      children: [
        {
          path: '',
          name: 'user-profile',
          component: UserProfileView
        },
        {
          path: 'posts',
          name: 'user-posts',
          component: UserPostsView
        },
        {
          path: 'edit',
          name: 'user-edit',
          component: UserEditView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: () => import('../views/NotFoundView.vue'),
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: () => import('../views/NetworkErrorView.vue')
    }
  ],
})

export default router
