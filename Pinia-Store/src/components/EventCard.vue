<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink
    class="block w-[250px] mb-[18px] p-[20px] border border-[#39495c]
           cursor-pointer no-underline text-[#2c3e50]
           transition duration-200 hover:scale-[1.01] hover:shadow-sp"
    :to="{ name: 'event-detail-view', params: { id: event.id } }"
  >
    <h2 class="text-xl">{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </RouterLink>
</template>
