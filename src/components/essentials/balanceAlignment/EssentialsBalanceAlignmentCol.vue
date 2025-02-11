<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col gap-4 grow">
        <h3 class="text-center font-bold text-2xl">
            {{ title }}
        </h3>
        <p>
            {{ description }}
        </p>
        <slot />
    </div>
</template>

<style lang="scss" scoped>

</style>
