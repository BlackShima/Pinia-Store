<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/types'

const props = defineProps<{ id: string }>()
const user = ref<User | null>(null)
const router = useRouter()

provide('user', user)

onMounted(async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
    if (!res.ok) {
      router.push({ name: 'resource-not-found', params: { resource: 'user' } })
      return
    }
    const data = await res.json()
    if (!data.id) {
      router.push({ name: 'resource-not-found', params: { resource: 'user' } })
      return
    }
    user.value = data
  } catch {
    router.push({ name: 'resource-not-found', params: { resource: 'user' } })
  }
})
</script>

<template>
  <div v-if="user">
    <div class="back-nav">
      <RouterLink to="/" class="back-btn">&larr; Back to Home</RouterLink>
    </div>
    <h2>{{ user.name }}</h2>
    <nav>
      <RouterLink :to="{ name: 'user-profile', params: { id } }">Profile</RouterLink> | 
      <RouterLink :to="{ name: 'user-posts', params: { id } }">Posts</RouterLink>
    </nav>
    <hr />
    <RouterView />
  </div>
</template>