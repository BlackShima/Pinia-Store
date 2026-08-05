<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import type { User } from '@/types'

defineProps<{
  user?: User
  id?: string | number
}>()

const router = useRouter()
const store = useMessageStore()

const handleEdit = () => {
  // 1. Set the flash message
  store.updateMessage('The update is in progress')
  
  // 2. Automatically reset message after 5 seconds
  setTimeout(() => {
    store.resetMessage()
  }, 5000)

  // 3. Redirect to user list page
  router.push({ name: 'event-list-view' })
}
</script>

<template>
  <div class="user-edit">
    <h2>Edit User</h2>
    <button @click="handleEdit">Update User Details</button>
  </div>
</template>

<style scoped>
.user-edit {
  margin-top: 20px;
}
button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>