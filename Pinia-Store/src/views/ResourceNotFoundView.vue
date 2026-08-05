<script setup lang="ts">
defineProps<{ resource?: string }>()
</script>

<template>
  <div>
    <h1>404 - Resource Not Found</h1>
    <p>The {{ resource || 'resource' }} you requested could not be found.</p>
    <RouterLink to="/">Back to Home</RouterLink>
  </div>
</template>