<script setup lang="ts">

import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink class="event-card event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="cp-5 w-[250px] cursor-pointer border border-[#39495] mb-[18px hover:scale-101 hover:shadow-sp]">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-class {
  display: flex;
  justify-content: center;
}
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>

