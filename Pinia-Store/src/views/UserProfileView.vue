<script setup lang="ts">
import type { User } from '@/types'
defineProps<{
  user: User
}>()
</script>

<template>
  <div v-if="user" class="profile">
    <h2>Address</h2>
    <p>{{ user.address.street }}, {{ user.address.suite }}</p>
    <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
  </div>
</template>

<style scoped>
.profile {
  width: 100%;
}
.profile p, .profile h2 {
  margin: 8px 0;
  width: 100%;
}
</style>
