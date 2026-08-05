import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import UserEditView from '@/views/UserEditView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AboutView from '@/views/AboutView.vue'

// Imports from views/event/ subfolder
import EventLayoutView from '@/views/event/LayoutView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'

import nProgress from 'nprogress'
import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'
import EventListView from '@/views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ 
        page: parseInt(route.query.page?.toString() || '1'),
        AmountEvent: parseInt(route.query.size?.toString() || '3') 
      })
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return EventService.getEvent(id)
          .then((response) => {
            eventStore.setEvent(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'event' }
              }
            } else {
              return { name: 'network-error' }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: EventRegisterView
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: () => import('@/views/UserEditView.vue') // Or create views/event/EditView.vue
        }
      ]
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0}
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router