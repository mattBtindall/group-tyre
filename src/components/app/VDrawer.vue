<script setup>
import VButton from './VButton.vue'
import { onUnmounted, watch } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps({
    show: {
        type: Boolean,
        required: true
    },
    title: {
        type: [String, null],
        required: true
    },
    hideOnMobile: {
        type: Boolean,
        required: false,
        default: true
    },
    width: {
        type: String,
        required: false,
        default: 'w-1/3 min-w-80'
    }
})

function bodyKeydownHandler(e) {
    if (e.key === 'Escape') {
        closeClickHandler()
    }
}

watch(() => props.show, (show) => {
    if (show) {
        document.body.addEventListener('keydown', bodyKeydownHandler)
        document.body.classList.add('scroll-lock')
    }
}, { immediate: true})

onUnmounted(() => {
    document.body.removeEventListener('keydown', bodyKeydownHandler)
    document.body.classList.remove('scroll-lock')
})

function closeClickHandler() {
    document.getElementById('app').removeAttribute('aria-hidden')
    document.body.removeEventListener('keydown', bodyKeydownHandler)
    document.body.classList.remove('scroll-lock')
    emit('close')
}
</script>

<template>
    <Transition>
        <div v-if="show"
             class="top-0 left-0 w-screen h-screen bg-black/25 fixed z-10"
             :class="{ hidden: hideOnMobile, 'sm:block': hideOnMobile}"
             @click="closeClickHandler"
        />
    </Transition>
    <aside class="drawer px-4 py-8 md:p-8 z-20  bg-white text-black right-0 top-0 fixed h-screen overflow-y-scroll overflow-x-hidden"
           :class="[{ active: show, hidden: hideOnMobile, 'sm:block': hideOnMobile}, width]"
    >
        <header class="flex gap-3 justify-between items-center mb-8">
            <h2 class="font-bold text-2xl">
                {{ title }}
            </h2>
            <VButton tabindex="-1" class="flex gap-1 py-2 px-5 border-2 border-red hover:bg-red hover:text-white transition-colors text-red" @click="closeClickHandler">
                <span>Close</span>
                <svg class="w-6"
                     focusable="false"
                     viewBox="0 0 24 24"
                     aria-hidden="true"
                     role="presentation"
                     fill="currentColor"
                >
                    <path
                        d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                </svg>
            </VButton>
        </header>
        <slot />
    </aside>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition-property: opacity;
    transition-duration: .5s;
    @apply ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.drawer {
    transform: translateX(100%);
    transition-property: transform;
    transition-duration: .5s;
    @apply ease-in-out;
}

.active.drawer {
    transform: translateX(0);
}
</style>
