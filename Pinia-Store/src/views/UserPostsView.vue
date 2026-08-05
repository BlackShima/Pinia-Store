<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Post } from '@/types'

const props = defineProps<{ id: string }>()
const posts = ref<Post[]>([])

onMounted(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.id}`)
  posts.value = await res.json()
})
</script>

<template>
  <div>
    <h3>User Posts</h3>
    <div v-for="post in posts" :key="post.id" class="post-item">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  border-bottom: 1px solid #eee;
  padding: 8px 0;
}
</style>