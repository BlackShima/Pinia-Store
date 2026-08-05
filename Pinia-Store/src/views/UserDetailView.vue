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
  <main v-if="loading" class="user-detail">
    <p>Loading user details...</p>
  </main>
  <main v-else-if="user" class="user-detail">
    <div id="flashMessage" v-if="store.message" class="flash-message">
      <h4>{{ store.message }}</h4>
    </div>
    <h1>{{ user.name }}</h1>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Website:</strong> {{ user.website }}</p>
    
    <h2>Company</h2>
    <p><strong>{{ user.company.name }}</strong></p>
    <p><em>{{ user.company.catchPhrase }}</em></p>
    
    <nav class="nav-links">
      <router-link :to="{ name: 'user-profile', params: { id: user.id } }">Profile</router-link> | 
      <router-link :to="{ name: 'user-posts', params: { id: user.id } }">Posts</router-link> |
      <router-link :to="{ name: 'user-edit', params: { id: user.id } }">Edit</router-link>
    </nav>
    
    <router-view :user="user" />
    
    <router-link :to="{ name: 'home' }" class="back-link">Back to Users</router-link>
  </main>
</template>

<style scoped>
.user-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
}
.user-detail p, .user-detail h2, .user-detail h1 {
  margin: 8px 0;
  width: 100%;
}
.nav-links {
  margin: 20px 0;
  font-weight: bold;
}
.nav-links a {
  color: #2c3e50;
  text-decoration: none;
}
.nav-links a.router-link-exact-active {
  color: #42b983;
}
.back-link {
  margin-top: 25px;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
