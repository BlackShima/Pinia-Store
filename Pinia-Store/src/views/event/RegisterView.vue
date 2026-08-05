<script setup lang="ts">
import { useRouter } from 'vue-router'
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message';
const props = defineProps<{
    event: Event
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
    store.updateMessage('You are successfully registerd for the ${props.event.title}!')
    setTimeout(() => {
        store.resetMessage()
    }, 3000)
    router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>
<template>
    <p>Register event here</p>
    <button @clikc="register">Register</button>
</template>