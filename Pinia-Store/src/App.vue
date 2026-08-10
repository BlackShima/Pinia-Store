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
      <div
        v-if="message"
        :key="message"
        id="flashMessage"
        role="status"
        aria-live="polite"
        class="animate-fade"
      >
        {{ message }}
      </div>

      <div>
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500"
          :to="{ name: 'event-list-view' }">Event</RouterLink>
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500"
          :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>

      <h1>Users Directory</h1>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
