<script setup lang="ts">
import type { User } from '@/types'
defineProps<{
  user: User
}>()
</script>

<template>
  <div v-if="user" class="w-full my-2">
    <h2 class="text-xl my-2 w-full">Address</h2>
    <p class="my-2 w-full">{{ user.address.street }}, {{ user.address.suite }}</p>
    <p class="my-2 w-full">{{ user.address.city }}, {{ user.address.zipcode }}</p>
    <p class="my-2 w-full"><strong>Phone:</strong> {{ user.phone }}</p>
  </div>
</template>
