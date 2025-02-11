<script setup>
import { ref, inject, computed } from 'vue'
import SalesAssistDiagnosticsInputList from './SalesAssistDiagnosticsInputList.vue'
import { tyreLabelValueMap } from '../../salesDiagnosticsWheelKeys'
import chevronDownImg from "@/assets/images/icons/chevron-down.svg"

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    isOptionSelected: {
        type: Boolean,
        required: true
    }
})

const listActive = ref(false)
const inputState = inject('inputState')
const outputText = computed(() => {
    for (const [key, value] of Object.entries(tyreLabelValueMap)) {
        if (value === inputState.value[props.id]) {
            return key
        }
    }
    return ''
})

function clickOutside(e, force = false) {
    if (force || !e.target.closest('.input-container')) {
        listActive.value = false
        document.body.removeEventListener('click', clickOutside)
    }
}

function handleClick() {
    listActive.value = true
    document.body.addEventListener('click', clickOutside)
}
</script>

<template>
    <div v-if="active"
         class="input-container relative w-full border border-zinc-300 rounded-sm py-2 ps-3 pe-2 flex cursor-pointer items-center"
         style="min-height: 55px"
         @click="handleClick"
    >
        <SalesAssistDiagnosticsInputList :id="id"
                                         :active="listActive"
                                         :output-text="outputText"
                                         @selected="() => clickOutside(null, true)"
        />
        <span class="whitespace-nowrap overflow-hidden text-ellipsis" :class="{'text-red': isOptionSelected}">{{ outputText }}</span>
        <img class="w-8 ml-auto shrink-0" :src="chevronDownImg" alt="">
    </div>
</template>

<style lang="scss" scoped>

</style>
