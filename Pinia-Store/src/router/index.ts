import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import UserEditView from '@/views/UserEditView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutView from '@/views/AboutView.vue'
import nProgress from 'nprogress'

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
      component: AboutView,
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    }
  ],
})
router.beforeEach(() => {
  nProgress.start()
})
router.afterEach(() => {
  nProgress.done
})

export default router
