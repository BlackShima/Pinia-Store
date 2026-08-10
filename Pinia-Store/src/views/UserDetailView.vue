<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UserServices from '@/services/UserServices'
import type { User } from '@/types'
import { useMessageStore } from '@/stores/message'

const route = useRoute()
const router = useRouter()
const user = ref<User | null>(null)
const loading = ref(true)
const store = useMessageStore()

onMounted(() => {
  const id = route.params.id as string
  UserServices.getUser(id)
    .then((response) => {
      if (response.data && Object.keys(response.data).length === 0) {
        router.push({ name: '404-resource', params: { resource: 'user' } })
      } else {
        user.value = response.data
      }
    })
    .catch((error) => {
      console.error('Error fetching user', error)
      if (error.response && error.response.status === 404) {
        router.push({ name: '404-resource', params: { resource: 'user' } })
      } else {
        router.push({ name: 'network-error' })
      }
    })
    .finally(() => {
      loading.value = false
    })
})
</script>

<template>
  <main v-if="loading" class="mx-auto flex max-w-[500px] flex-col items-center text-left">
    <p>Loading user details...</p>
  </main>
  <main v-else-if="user" class="mx-auto flex max-w-[500px] flex-col items-center text-left">
    <div id="flashMessage" v-if="store.message" class="flash-message">
      <h4>{{ store.message }}</h4>
    </div>
    <h1 class="my-2 w-full">{{ user.name }}</h1>
    <p class="my-2 w-full"><strong>Username:</strong> {{ user.username }}</p>
    <p class="my-2 w-full"><strong>Email:</strong> {{ user.email }}</p>
    <p class="my-2 w-full"><strong>Website:</strong> {{ user.website }}</p>
    
    <h2 class="my-2 w-full">Company</h2>
    <p class="my-2 w-full"><strong>{{ user.company.name }}</strong></p>
    <p class="my-2 w-full"><em>{{ user.company.catchPhrase }}</em></p>
    <div>
    <nav class="my-5 font-bold">
      <router-link class="text-[#2c3e50] no-underline" :to="{ name: 'user-profile', params: { id: user.id } }">Profile</router-link> | 
      <router-link class="text-[#2c3e50] no-underline" :to="{ name: 'user-posts', params: { id: user.id } }">Posts</router-link> |
      <router-link class="text-[#2c3e50] no-underline" :to="{ name: 'user-edit', params: { id: user.id } }">Edit</router-link>
    </nav>
    
    <router-view :user="user" />
    </div>
    <router-link :to="{ name: 'home' }" class="mt-[25px] inline-block cursor-pointer font-bold text-[#2c3e50] underline">Back to Users</router-link>
  </main>
</template>
