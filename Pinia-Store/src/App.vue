<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <!-- Fixed typo: id="flashMessage" -->
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div>
        <nav>
          <RouterLink to="/">Event</RouterLink> |
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/student">Student</RouterLink> |
          <RouterLink to="/event/1">URL</RouterLink>
        </nav>
      </div>
      <h1>Users Directory</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

@keyframes yellowFade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellowFade 5s ease-in-out; /* Updated to 5s to match timeout */
  background-color: #64B5F6;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 15px;
}
</style>