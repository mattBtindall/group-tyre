<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    }
})
</script>

<template>
    <li class="mb-8">
        <header class="mb-3">
            <h3 class="font-bold">
                {{ title }}
            </h3>
        </header>
        <p class="ps-3">
            {{ definition }}
        </p>
    </li>
</template>

<style lang="scss" scoped>

</style>