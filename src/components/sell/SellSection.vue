<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col gap-4 dark:bg-white dark:text-black border-black border-2 dark:border-none p-6 lg:min-w-[380px]">
        <h2 class="font-bold text-2xl">
            {{ title }}
        </h2>
        <h3 class="font-bold text-lg">
            {{ subTitle }}
        </h3>
        <slot />
    </div>
</template>

