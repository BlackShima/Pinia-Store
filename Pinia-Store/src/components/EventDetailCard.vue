<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
    event: Event
}>()
</script>

<template>
    <div class="flex justify-center">
        <div class="flex w-[250px] flex-col mb-[18px] border border-[#2c3e50] p-[15px] text-right text-sm">
            <span>{{ event.category }}</span>
            <span>Organized by:{{ event.organizer }}</span>
        </div>
    </div>
</template>