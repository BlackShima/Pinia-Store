<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import UserServices from '@/services/UserServices'
import type { Post } from '@/types'

const route = useRoute()
const posts = ref<Post[]>([])
const loading = ref(true)

onMounted(() => {
  const id = route.params.id as string
  UserServices.getUserPosts(id)
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching posts', error)
    })
    .finally(() => {
      loading.value = false
    })
})
</script>

<template>
  <div class="posts">
    <h2>User Posts</h2>
    <div v-if="loading">Loading posts...</div>
    <div v-else class="post-list">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts {
  width: 100%;
}
.post-list {
  display: flex;
  flex-direction: column;
}
.post-item {
  border: 1px solid #39495c;
  padding: 15px;
  margin-bottom: 15px;
  text-align: left;
}
.post-item h3 {
  margin-top: 0;
}
</style>
