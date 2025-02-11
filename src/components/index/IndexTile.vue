<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
    routeName: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="w-full sm:w-1/3">
        <RouterLink :to="{ name: routeName }" class="flex flex-col gap-5 bg-zinc-100 dark:bg-white hover:bg-zinc-200 transition-colors text-black h-full dark:border dark:border-zinc-700 dark:border-b-0">
            <img :src="imgSrc" alt="" class="">
            <div class="flex flex-col gap-3 px-5 pb-5">
                <h2 class="font-bold text-xl">
                    {{ title }}
                </h2>
                <p>{{ description }}</p>
            </div>
        </RouterLink>
    </li>
</template>

<style lang="scss" scoped>

</style>