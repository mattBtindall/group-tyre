<script setup>
import { computed } from 'vue'
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['videoClick'])

const styles = computed(() => ({
    backgroundImage: `url(${props.placeholder})`
}))

function handleVideoClick() {
    emit('videoClick', props.title)
}
</script>

<template>
    <li class="flex flex-col gap-8 mb-8 p-4 border-b-8 border-zinc-200 w-1/2">
        <div class="relative text-white hover:text-red cursor-pointer group h-40 bg-center bg-cover bg-no-repeat" :style="styles" @click="handleVideoClick">
            <div class="text-inherit rounded-full p-2 border-2 border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:border-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg"
                     focusable="false"
                     viewBox="0 0 24 24"
                     aria-hidden="true"
                     role="presentation"
                     class="w-8 transition-colors"
                >
                    <path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                </svg>
            </div>
        </div>
        <h3 class="font-bold text-md cursor-pointer" @click="handleVideoClick">
            {{ title }}
        </h3>
    </li>
</template>

<style lang="scss" scoped>

</style>