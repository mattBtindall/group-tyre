<script setup>
import { onMounted, computed } from 'vue'
import { RouterView } from 'vue-router'
import { useColourModeStore } from './stores/ColourModeStore'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import VContainer from './components/app/VContainer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const colourModeStore = useColourModeStore()

onMounted(() => {
    colourModeStore.init()
})

const showNav = computed(() => route.name === 'salesAssist' || route.name === 'essentials')
</script>

<template>
    <TheHeader />
    <main class="grow flex flex-col">
        <VContainer>
            <div class="flex flex-col gap-8 sm:gap-32 items-center sm:justify-center overflow-y-auto grow">
                <RouterView />
            </div>
        </VContainer>
    </main>
    <TheFooter />
</template>

<style scoped></style>
