<script setup lang="ts">
import { type User } from '@/types'
defineProps<{
    user: User
}>()
</script>

<template>
    <router-link :to="{ name: 'user-detail', params: { id: user.id } }" class="user-card-link">
        <div v-if="user" class="user-card">
            <h2>{{ user.name }}</h2>
            <p>Email: {{ user.email }}</p>
            <p>Company: {{ user.company.name }}</p>
        </div>
    </router-link>
</template>

<style scoped>
.user-card-link {
    text-decoration: none;
    color: inherit;
}
.user-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    text-align: left;
}
.user-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>