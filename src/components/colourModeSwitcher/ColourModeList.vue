<script setup>
import { colourModeIds } from '../../salesDiagnosticsWheelKeys'
import ColourModeIcon from './ColourModeIcon.vue'

defineProps({
    active: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['mode-change'])

function clickHandler(mode) {
    emit('mode-change', mode)
}
</script>

<template>
    <ol v-if="active" class="colour-mode-list absolute top-full rounded-lg border border-zinc-400 flex flex-col right-0 align-center z-10 py-2 shadow-xl bg-white dark:bg-black min-w-28 overflow-hidden">
        <li v-for="(value, key) in colourModeIds"
            :key="key"
            class="flex gap-2 items-center justify-center px-4 py-1 cursor-pointer"
            @click="clickHandler(value)"
        >
            <ColourModeIcon :icon="value" />
            <span class="capitalize">{{ value }}</span>
        </li>
    </ol>
</template>

<style lang="scss" scoped>
</style>