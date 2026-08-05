<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
    event: Event
}>()
</script>

<template>
    <div class="detail-class">
        <div class="detail-card">
            <span>{{ event.category }}</span>
            <span>Organized by:{{ event.organizer }}</span>
        </div>
    </div>
</template>

<style scoped>
.detail-class {
    display: flex;
    justify-content: center;
}
.detail-card {
    padding: 15px;
    width: 250px;
    border: 1px solid #2c3e50;
    margin-bottom: 18px;

    text-align: right;

    display: flex;
    flex-direction: column;
    font-size: 14px;
}
</style>