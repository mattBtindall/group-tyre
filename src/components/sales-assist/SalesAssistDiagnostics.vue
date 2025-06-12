<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { carSideIds, tyreLabelIds } from '../../salesDiagnosticsWheelKeys'
import SalesAssistDiagnosticsReg from './SalesAssistDiagnosticsReg.vue'
import SalesAssistDiagnosticsCar from './SalesAssistDiagnosticsCar.vue'
import SalesAssistDiagnosticsInputRoot from './SalesAssistDiagnosticsInputRoot.vue'
import VButton from '../app/VButton.vue'

const inputState = inject('inputState')
const changeState = inject('changeState')
const router = useRouter()
defineProps({
    step: {
        type: Number,
        required: true
    }
})

async function handleGenerateClick() {
    const strippedNone = Object.fromEntries(Object.entries(inputState.value).filter(([side, damage]) => damage !== tyreLabelIds.NONE_ID))
    const jsonData = JSON.stringify(strippedNone)
    const res = await fetch(`${import.meta.env.VITE_API_UL}report`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData
    })
    const { errors, data } = await res.json()
    if (errors) {
        console.log(errors)
    }

    // can't seem to pass a POJO through on state
    router.push({ name: 'report', params: { id: data.id }, state: { car: JSON.stringify(inputState.value)}})
}
</script>

<template>
    <div class="flex w-full flex-col lg:flex-row justify-around">
        <div class="w-full lg:w-2/5 flex-shrink-0 lg:p-3">
            <SalesAssistDiagnosticsReg @input-change="(value) => changeState('reg', value)" />
            <SalesAssistDiagnosticsInputRoot :id="carSideIds.FRONT_PASSENGER_SIDE_ID" title="Front Passenger Side" :active="step !== 1" />
            <SalesAssistDiagnosticsInputRoot :id="carSideIds.REAR_PASSENGER_SIDE_ID" title="Rear Passenger Side" :active="step !== 1" />
        </div>
        <div class="w-1/6 px-4 pt-12 hidden lg:flex justify-center pb-12">
            <SalesAssistDiagnosticsCar />
        </div>
        <div class="container-bottom w-full lg:w-2/5 flex-shrink-0 lg:px-3 pt-0 lg:pb-3">
            <SalesAssistDiagnosticsInputRoot :id="carSideIds.FRONT_DRIVER_SIDE_ID" title="Front Driver Side" :active="step !== 1" />
            <SalesAssistDiagnosticsInputRoot :id="carSideIds.REAR_DRIVER_SIDE_ID"
                                             title="Rear Driver Side"
                                             :active="step !== 1"
                                             class="mb-0"
            />
            <div v-if="step === 3" class="border-t border-zinc-700 mt-3 pt-3">
                <VButton type="secondary" class="w-full py-3" @click="handleGenerateClick">
                    Generate
                </VButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 1024px) {
    .container-bottom {
        padding-top: calc(97px + 24px + 1px);
    }
}
</style>
