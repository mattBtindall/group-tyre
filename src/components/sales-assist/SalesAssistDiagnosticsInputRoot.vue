<script setup>
import { inject, computed } from 'vue'
import SalesAssistDiagnosticsInput from './SalesAssistDiagnosticsInput.vue'
import { tyreLabelIds } from '../../salesDiagnosticsWheelKeys'

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})
const inputState = inject('inputState')
const isOptionSelected = computed(() => (
    inputState.value[props.id] &&
    inputState.value[props.id] !== tyreLabelIds.SELECT_ID &&
    inputState.value[props.id] !== tyreLabelIds.NONE_ID
))
</script>

<template>
    <div class="bg-white text-black p-4 border-4 mb-8 flex flex-col justify-center gap-4" :class="{'border-red': isOptionSelected, 'border-black dark:border-zinc-500': !isOptionSelected}">
        <h2 class="font-bold text-2xl">
            {{ title }}
        </h2>
        <SalesAssistDiagnosticsInput :id="id" :active="active" :is-option-selected="isOptionSelected" />
    </div>
</template>

<style lang="scss" scoped>

</style>
