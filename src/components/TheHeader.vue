<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useColourModeStore } from '../stores/ColourModeStore'
import VButton from './app/VButton.vue'
import VContainer from './app/VContainer.vue'
import TheNav from './TheNav.vue'
import VDrawer from './app/VDrawer.vue'
import GlossaryRoot from './glossary/GlossaryRoot.vue'
import ColourModeRoot from './colourModeSwitcher/ColourModeRoot.vue'
import salesAssistLogoDarkImg from '@/assets/images/sales_assist_dark.svg'
import salesAssistLogoLightImg from '@/assets/images/sales_assist_light.svg'
import essentialsLogoDarkImg from '@/assets/images/essentials_dark.svg'
import essentialsLogoLightImg from '@/assets/images/essentials_light.svg'
import defaultLogoDarkImg from '@/assets/images/logo_dark.svg'
import defaultLogoLightImg from '@/assets/images/logo_light.svg'
import { colourModeIds } from "../salesDiagnosticsWheelKeys"

const drawerActive = ref(false)
const colourModeStore = useColourModeStore()
const route = useRoute()
const imageAttributes = computed(() => {
    switch (route.name) {
        case 'salesAssist':
            return {
                src: colourModeStore.colourMode === colourModeIds.DARK_ID ? salesAssistLogoLightImg : salesAssistLogoDarkImg,
                class: 'w-52'
            }
        case 'essentials':
            return {
                src: colourModeStore.colourMode === colourModeIds.DARK_ID ? essentialsLogoLightImg : essentialsLogoDarkImg,
                class: 'w-44'
            }
        default:
            return {
                src: colourModeStore.colourMode === colourModeIds.DARK_ID ? defaultLogoLightImg : defaultLogoDarkImg,
                class: 'w-64 py-8 sm:py-0'
            }
    }
})
const showNav = computed(() => route.name === 'salesAssist' || route.name === 'essentials')

function openDrawerClickHandler() {
    drawerActive.value = true
    document.getElementById('app').setAttribute('aria-hidden', true)
}
</script>

<template>
    <header>
        <VContainer>
            <div class="flex justify-between items-center sm:h-28 sm:mb-0">
                <div class="flex flex-col sm:flex-row items-center gap-5 sm:gap-12 w-full sm:w-auto py-4 sm:py-0">
                    <div class="min-w-0 sm:min-w-64">
                        <img v-bind="imageAttributes" alt="">
                    </div>
                    <TheNav v-if="showNav" />
                </div>
                <div class="hidden lg:flex gap-4">
                    <VButton type="primary" class="hidden sm:block py-3 px-5 " @click="openDrawerClickHandler">
                        Search Glossary
                    </VButton>
                    <ColourModeRoot />
                </div>
            </div>
        </VContainer>
    </header>
    <Teleport to="#app">
        <VDrawer
            title="Search Glossary"
            :show="drawerActive"
            @close="drawerActive = false"
        >
            <GlossaryRoot />
        </VDrawer>
    </Teleport>
</template>

<style lang="scss" scoped>

</style>