<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'


const store = useEventStore()
const { event } = storeToRefs(store)

</script>
<template>
    <div v-if="event" class="mx-auto max-w-2xl text-center">
        <h1 class="mb-4 text-2xl font-bold text-gray-800">{{ event.title }}</h1>
        <nav class="mb-6 flex justify-center space-x-3 text-sm font-bold text-[#2c3e50]">
            <RouterLink class="no-underline hover:text-[#42b983]" :to="{ name: 'event-detail-view', params: { id: event.id } }">Details</RouterLink>
      |
      <RouterLink class="no-underline hover:text-[#42b983]" :to="{ name: 'event-register-view', params: { id: event.id } }">Register</RouterLink>
      |
      <RouterLink class="no-underline hover:text-[#42b983]" :to="{ name: 'event-edit-view', params: { id: event.id } }">Edit</RouterLink></nav>
      
        <RouterView :event="event"/>
    </div>
</template>