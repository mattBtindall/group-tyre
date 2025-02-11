<script setup>
import VButton from '../../app/VButton.vue'
import loadingGifImg from '@/assets/images/loading-gif.gif'

defineProps({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
defineEmits(['close'])
</script>

<template>
    <div class="w-full mb-8 relative" style="padding-top: 56.25%;">
        <iframe :src="src"
                frameborder="0"
                allow="fullscreen;"
                allowfullscreen
                class="w-full h-full absolute top-0 left-0 z-10"
        />
        <img :src="loadingGifImg" alt="" class="w-12 xl:w-16 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
    </div>
    <header class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-xl">
            {{ title }}
        </h3>
        <VButton type="primary" class="px-5 py-2" @click="$emit('close')">
            Back to Videos
        </VButton>
    </header>
    <p class="mb-4">
        {{ description }}
    </p>
</template>

<style lang="scss" scoped>

</style>