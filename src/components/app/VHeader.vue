<script setup>
import { useSlots, computed } from 'vue'

const slots = useSlots()
defineProps({
    title: {
        type: String,
        required: true
    }
})

const classes = computed(() => slots ? 'flex-col gap-4 items-center sm:flex-row sm:gap-0' : '')
</script>

<template>
    <header class="flex justify-center w-full p-4 sm:p-0" :class="classes">
        <h1 class="font-bold text-4xl border-b-4 border-red pb-1">
            {{ title }}
        </h1>
        <slot v-if="slots" />
    </header>
</template>

<style lang="scss" scoped>

</style>