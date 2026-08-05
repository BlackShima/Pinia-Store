<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div id="layout">
    <header>
      <div id="flshMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div>
        <nav>
          <RouterLink to="/">Event</RouterLink> |
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/student">Student</RouterLink> |
          <RouterLink to="/event/:id">URL</RouterLink>
        </nav>
      </div>
      <h1>Users Directory</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
  animation: yellowFade 3s ease-in-out;
}
</style>
