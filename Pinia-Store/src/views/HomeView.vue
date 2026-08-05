<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/types'

const users = ref<User[]>([])
const router = useRouter()
const errorMessage = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      router.push({ name: 'resource-not-found', params: { resource: 'users' } })
      return
    }
    users.value = await res.json()
  } catch (err) {
    console.error('Network error:', err)
    errorMessage.value = 'Your Network is so noob'
  }
})

function goToDetail(id: number) {
  router.push({ name: 'user-profile', params: { id } })
}
</script>

<template>
  <div class="user-list">
    <h1>Users</h1>
    <div v-if="errorMessage" class="error-box">
      {{ errorMessage }}
    </div>
    <div 
      v-for="user in users" 
      :key="user.id" 
      class="user-card"
      @click="goToDetail(user.id)"
    >
      <h3>{{ user.name }}</h3>
      <p>Email: {{ user.email }}</p>
      <p>Company: {{ user.company.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
}
.user-card:hover {
  background-color: #f9f9f9;
}
</style>