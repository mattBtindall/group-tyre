<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VHeader from '../components/app/VHeader.vue'
import SalesAssistDiagnosticsReg from '../components/sales-assist/SalesAssistDiagnosticsReg.vue'
import VButton from '../components/app/VButton.vue'
import SellSection from '../components/sell/SellSection.vue'
import { tyreValueMaps, carSideIds } from '../salesDiagnosticsWheelKeys'

const router = useRouter()
const reg = ref(null)
const retrieveReportClickHandler = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_UL}report/search/${reg.value}`)
    let { data: parsedData, message } = await res.json()
    if (message) {
        // output error here
        console.log(message)
        return
    }

    // the data comes back with extra keys and different values here
    const validKeys = Object.values(carSideIds)
    validKeys.push('reg', 'id')
    parsedData = Object.entries(parsedData).filter(([key, value]) => validKeys.includes(key))
    parsedData = Object.fromEntries(parsedData.map(([key, value]) => {
        let updateValue = value
        if (tyreValueMaps[value]) {
            updateValue = tyreValueMaps[value]
        }

        return [key, updateValue]
    }))
    router.push({ name: 'report', params: { id: parsedData.id }, state: { car: JSON.stringify(parsedData)}})
}
</script>

<template>
    <VHeader class="relative" title="Sell Tyres" />
    <div class="flex flex-col gap-4 lg:flex-row justify-between lg:min-w-[900px]">
        <SellSection title="Retrieve Report" sub-title="Retrieve a previously generated report">
            <SalesAssistDiagnosticsReg @input-change="(value) => reg = value" />
            <VButton type="primary"
                     class="py-4"
                     :class="{
                         'pointer-events-none': !reg,
                         'opacity-50': !reg
                     }"
                     @click="retrieveReportClickHandler"
            >
                Retrieve Report
            </VButton>
        </SellSection>

        <div class="none w-[2px] h-auto bg-black dark:bg-zinc-500" />

        <SellSection title="Generate a New Report" sub-title="Start a new report">
            <VButton type="secondary"
                     class="py-4 mt-auto"
                     is-link
                     :to="{ name: 'salesAssist' }"
            >
                Start a New Report
            </VButton>
        </SellSection>
    </div>
</template>

