<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import UserServices from '@/services/UserServices'
import type { User } from '@/types'
import { onMounted, ref } from 'vue'

const users = ref<User[] | null>(null)
const loading = ref(true)

onMounted (() => {
  UserServices.getUsers()
  .then((response) => {
    users.value = response.data
  })
  .catch((error) => {
    console.error('There was an error!', error)
  })
  .finally(() => {
    loading.value = false
  })
})
</script>

<template>
  <main class="home">
    <div v-if="loading">
      Loading users...
    </div>
    <div v-else class="users">
      <UserCard 
        v-for="user in users" 
        :key="user.id" 
        :user="user" 
      />
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>