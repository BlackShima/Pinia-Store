<script setup lang="ts">
import { inject, type Ref } from 'vue'
import type { User } from '@/types'

const user = inject<Ref<User | null>>('user')
</script>

<template>
  <div v-if="user">
    <h3>Profile Details</h3>
    <p>Phone: {{ user.phone }}</p>
    <p>Address: {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
  </div>
</template>