<script setup>
import { computed } from 'vue';
import { carSideIds } from '../../salesDiagnosticsWheelKeys'
import reportTypes from '../../ReportTypes'
import VButton from '../app/VButton.vue'
import ReportObservation from './ReportObservation.vue'

const props = defineProps({
    car: {
        type: [Object, null],
        required: true
    }
})

const observations = computed(() => {
    if (!props.car) {
        return []
    }

    const sideKeys = Object.values(carSideIds)
    const car = sideKeys.map(key => ({
        side: key,
        tyreState: props.car[key],
        ...reportTypes[props.car[key]]
    }))
    return car.filter(c => c.tyreState !== 'none')
})
</script>

<template>
    <div class="observations w-full sm:w-3/5 flex flex-col relative overflow-hidden">
        <header class="flex justify-between items-center mb-2">
            <h2 class="text-2xl font-bold sm:py-3 mb-4 lg:mb-0">
                Observations, Causes, Risks & Cost
            </h2>
            <VButton class="hidden sm:block text-sm bg-red hover:opacity-80 text-white px-4 py-2">
                Download PDF
            </VButton>
        </header>
        <ol class="observations__list overflow-y-scroll">
            <ReportObservation v-for="(observation, index) in observations"
                               :key="index"
                               v-bind="observation"
                               :last="index === observations.length - 1"
            />
        </ol>
    </div>
</template>

<style lang="scss" scoped>
.observations {
    &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        content: "";
        background: linear-gradient(0deg, white, transparent);
        height: 70px;
        pointer-events: none;
    }
}
</style>