<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav style="transform: translateY(.25rem);">
        <ol class="flex">
            <RouterLink :to="{ name : 'salesAssist' }" class="px-8 pb-1" active-class="border-b-2 dark:border-white border-black">
                Sales assist
            </RouterLink>
            <RouterLink :to="{ name : 'sell' }" class="px-8 pb-1" active-class="border-b-2 dark:border-white border-black">
                Sell Tyres
            </RouterLink>
            <RouterLink :to="{ name : 'essentials' }" class="px-8 pb-1" active-class="border-b-2 dark:border-white border-black">
                Essentials
            </RouterLink>
        </ol>
    </nav>
</template>

<style lang="scss" scoped>

</style>
