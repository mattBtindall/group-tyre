<script setup>
import { ref } from 'vue'
import { essentialsTitlesMap, essentialsTitlesIds } from '../salesDiagnosticsWheelKeys'
import VHeader from '../components/app/VHeader.vue'
import VButton from '../components/app/VButton.vue'
import EssentialsDiagramDesktop from '../components/essentials/EssentialsDiagramDesktop.vue'
import EssentialsDiagramMobile from '../components/essentials/EssentialsDiagramMobile.vue'
import EssentialsDrawer from '../components/essentials/EssentialsDrawer.vue'
import chevronRightImg from "@/assets/images/icons/chevron-right.svg"

const drawer = ref(null)

function handleTextClick(value) {
    drawer.value = value
}
</script>

<template>
    <VHeader class="relative" title="Essentials">
        <VButton type="secondary" class="sm:absolute right-0 px-5 flex gap-1 py-3" @click="handleTextClick(essentialsTitlesIds.VIDEO_ID)">
            <img class="w-6" :src="chevronRightImg" alt="">
            <span>Videos</span>
        </VButton>
    </VHeader>
    <EssentialsDiagramMobile @label-click="handleTextClick" />
    <EssentialsDiagramDesktop @label-click="handleTextClick" />
    <EssentialsDrawer :id="drawer" @close="drawer = null" />
</template>

<style lang="scss" scoped>
</style>
