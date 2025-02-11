<script setup>
const props = defineProps({
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
})
</script>

<template>
    <li class="flex gap-3 items-center" :class="`${number} ${active}`">
        <span class="text-center rounded-full text-black dark:text-white w-7 h-7 flex items-center justify-center font-lg font-bold"
              :class="`${props.active || props.completed ? 'bg-red': ''}`"
        >
            {{ completed ? '✓' : number }}
        </span>
        <span>{{ title }}</span>
    </li>
</template>

<style lang="scss" scoped>

</style>