<script setup>
import { computed, onUnmounted, ref } from 'vue';
import { useColourModeStore } from '../../stores/ColourModeStore'
import { colourModeIds } from '../../salesDiagnosticsWheelKeys'
import ColourModeIcon from './ColourModeIcon.vue'
import ColourModeList from './ColourModeList.vue'

const { AUTO_ID, DARK_ID, LIGHT_ID } = colourModeIds
const colourModeStore = useColourModeStore()
const dropDownActive = ref(false)
const initialValue = colourModeStore.getLocalStorageValue() || AUTO_ID
const mode = ref(initialValue)

function closeDropDown() {
    dropDownActive.value = false
    document.removeEventListener('click', bodyClickHandler)
}

function bodyClickHandler(e) {
    if (!e.target.closest('.colour-mode-list')) {
        closeDropDown()
    }
}

function iconClickHandler() {
    if (dropDownActive.value) {
       closeDropDown()
    } else {
        dropDownActive.value = true
        document.addEventListener('click', bodyClickHandler)
    }
}

function changeModeHandler(newMode) {
    if (mode.value !== newMode) {
        mode.value = newMode
        colourModeStore.setMode(newMode)
    }
    closeDropDown()
}

onUnmounted(() => document.removeEventListener('click', bodyClickHandler))
</script>

<template>
    <div class="border-s border-s-black dark:border-s-white ps-4 justify-center items-center relative hidden sm:flex">
        <div class="flex items-center cursor-pointer gap-1" @click.stop="iconClickHandler">
            <ColourModeIcon :icon="mode" />
            <svg xmlns="http://www.w3.org/2000/svg"
                 focusable="false"
                 viewBox="0 0 24 24"
                 aria-hidden="true"
                 role="presentation"
                 class="w-6"
            >
                <path :fill="colourModeStore.invertedColourMode === LIGHT_ID ? '#fff' : '#000'" d="M7 10l5 5 5-5z" />
            </svg>
        </div>

        <ColourModeList :active="dropDownActive" @mode-change="changeModeHandler" />
    </div>
</template>

<style lang="scss" scoped>

</style>