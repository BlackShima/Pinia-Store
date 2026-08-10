<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const router = useRouter()
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  AmountEvent: {
    type: Number,
    required: true
  }
})

const pageSize = computed(() => Number(props.AmountEvent) || 3)
const page = computed(() => Number(props.page) || 1)

const hasNextPage = computed(() => {
  const total = Number(totalEvents.value) || 0
  const size = pageSize.value
  
  if (total === 0 && events.value) {
    return events.value.length === size
  }
  
  const totalPages = Math.ceil(total / size)
  return page.value < totalPages
})

watchEffect(() => {
  events.value = null
  
  EventService.getEvents(pageSize.value, page.value)
    .then((response) => {
      events.value = response.data
      totalEvents.value = parseInt(response.headers['x-total-count'] || response.headers['X-Total_Count'])
    })
    .catch(() => {
      router.push({ name: 'network-error' })
    })
})
</script>

<template>
  <h1 class="text-4xl mb-8">Events For Good</h1>
  
  <div class="flex flex-col items-center">

    <EventCard v-for="event in events" :key="event.id" :event="event" />
    
    <div class="flex gap-4 mt-8">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, size: pageSize } }"
        rel="prev"
        class="font-bold text-[#42b983] hover:underline"
        v-if="page != 1"
      >
        &#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, size: pageSize } }"
        rel="next"
        class="font-bold text-[#42b983] hover:underline"
        v-if="hasNextPage"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>