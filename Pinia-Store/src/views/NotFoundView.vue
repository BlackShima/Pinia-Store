<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = withDefaults (
    defineProps<{
        resource?: string
    }>(),
    {
        resource: 'page'
    }
)
</script>

<template>
    <div class="flex flex-col items-center mt-[50px] text-center">
        <h1>Oops!</h1>
        <h3>The {{ props.resource }} you're looking for is not here.</h3>
        <RouterLink class="mt-5 text-[#2c3e50] font-bold underline inline-block" :to="{ name: 'home' }">Back to the home page</RouterLink>
    </div>
</template>