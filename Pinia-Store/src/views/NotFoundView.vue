<script setup lang="ts">
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
    <div class="not-found">
        <h1>Oops!</h1>
        <h3>The {{ props.resource }} you're looking for is not here.</h3>
        <router-link :to="{ name: 'home' }">Back to the home page</router-link>
    </div>
</template>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    text-align: center;
}
.not-found a {
    margin-top: 20px;
    color: #2c3e50;
    font-weight: bold;
    text-decoration: underline;
}
</style>
