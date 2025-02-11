<script setup>
defineProps({
    treadDepth: {
        type: [Number, null],
        required: true
    },
    brakingForce: {
        type: [Number, null],
        required: true
    },
})
</script>

<template>
    <div class="bg-black h-12 relative before:absolute before:right-0 before:h-full before:w-2">
        <span class="absolute right-6 text-white -translate-y-1/2 top-1/2 text-sm" :class="!brakingForce ? 'hidden' : ''">{{ brakingForce }}m</span>
        <span class="absolute -right-12 text-black -translate-y-1/2 top-1/2 text-sm">{{ treadDepth ?? 0 }}mm</span>
    </div>
</template>

<style lang="scss" scoped>

</style>
