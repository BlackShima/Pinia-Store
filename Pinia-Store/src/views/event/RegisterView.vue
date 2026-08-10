<script setup lang="ts">
import { useRouter } from 'vue-router'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
}>()

const router = useRouter()
const store = useMessageStore()

const register = () => {
  store.updateMessage(`You are successfully registered for ${props.event.title}!`)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <div class="my-4 text-center">
    <p class="mb-4 text-gray-600">Register event here</p>
    
    <button 
      @click="register"
      class="rounded bg-[#42b983] px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-[#33a06f] active:scale-95 cursor-pointer"
    >
      Register
    </button>
  </div>
</template>