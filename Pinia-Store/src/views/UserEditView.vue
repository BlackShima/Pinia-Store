<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{ id?: string | number }>()
const router = useRouter()
const store = useMessageStore()

const handleEdit = () => {
  // 1. Set the flash message in state
  store.updateMessage('Data has been updated')
  
  // 2. Automatically reset message after 3 seconds
  setTimeout(() => {
    store.resetMessage()
  }, 3000)

  // 3. Navigate back to details view
  router.push({
    name: 'user-detail',
    params: { id: props.id }
  })
}
</script>

<template>
  <div class="user-edit">
    <h2>Edit User</h2>
    <button @click="handleEdit">Edit</button>
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