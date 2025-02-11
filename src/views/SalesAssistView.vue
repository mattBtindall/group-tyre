<script setup>
import { ref, provide, computed, watch } from 'vue'
import VHeader from '../components/app/VHeader.vue'
import SalesAssistSteps from '../components/sales-assist/SalesAssistSteps.vue'
import SalesAssistDiagnostics from '../components/sales-assist/SalesAssistDiagnostics.vue'
import { carSideIds, tyreLabelIds } from '../salesDiagnosticsWheelKeys'

const inputState = ref({
    reg: null,
    [carSideIds.FRONT_PASSENGER_SIDE_ID]: tyreLabelIds.SELECT_ID,
    [carSideIds.FRONT_DRIVER_SIDE_ID]: tyreLabelIds.SELECT_ID,
    [carSideIds.REAR_PASSENGER_SIDE_ID]: tyreLabelIds.SELECT_ID,
    [carSideIds.REAR_DRIVER_SIDE_ID]: tyreLabelIds.SELECT_ID
})

const hasSelected = computed(() => {
    const copy = Object.assign({}, inputState.value)
    delete copy.reg
    const values = Object.values(copy)
    return {
        error: values.some(v => (v !== tyreLabelIds.SELECT_ID && v !== tyreLabelIds.NONE_ID)),
        all: !values.includes(tyreLabelIds.SELECT_ID)
    }
})

const step = computed(() => {
    if (inputState.value.reg && hasSelected.value.all) {
        return 3
    } else if (inputState.value.reg) {
        return 2
    }
    return 1
})

function changeState(key, newValue) {
    inputState.value[key] = newValue
}

provide('inputState', inputState)
provide('changeState', changeState)
</script>

<template>
    <div class="flex flex-col items-center gap-8 w-full overflow-y-scroll sm:overflow-y-visible">
        <VHeader title="Sales Assist" />
        <SalesAssistSteps :step-number="step" />
        <SalesAssistDiagnostics :step="step" />
    </div>
</template>

<style lang="scss" scoped>

</style>
