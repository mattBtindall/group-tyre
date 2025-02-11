<script setup>
import { computed, ref } from 'vue'
import EssentialsGauge from './EssentialsGauge.vue'

// const CURRENT_PRESSURE_MAX = 5.52
const DEFAULT_PRESSURE_VALUE = 2.04
const correctPressure = ref(DEFAULT_PRESSURE_VALUE)
const currentPressure = ref(DEFAULT_PRESSURE_VALUE)

function resetValuesClickHandler() {
    correctPressure.value = DEFAULT_PRESSURE_VALUE
    currentPressure.value = DEFAULT_PRESSURE_VALUE
}

const percentageDifference = computed(() => {
    if (correctPressure.value > currentPressure.value) {
        return Math.ceil(100 - (correctPressure.value * 100) / currentPressure.value);
    } else if (correctPressure.value < currentPressure.value) {
        return Math.ceil(100 - (correctPressure.value / currentPressure.value) * 100);
    }

    return 0;
})

const percentageDifferenceLabel = computed(() => {
    if (correctPressure.value === currentPressure.value) {
        return 'Correctly Inflated'
    }
    return `${currentPressure.value < correctPressure.value ? 'Under inflated by' : 'Over inflated by'} ${percentageDifference.value}%`
})

const gaugeValues = computed(() => {
    const config = { lifeloss: 0, fuelloss: 0}
    if (percentageDifference.value) {
        if (percentageDifference.value > 0) {
            config.lifeloss = Math.abs(percentageDifference.value * 0.6);
            config.fuelloss = Math.abs(percentageDifference.value * 0.07);
        } else if (percentageDifference.value < 0) {
            if (percentageDifference.value > -21) {
                config.lifeloss = Math.abs(percentageDifference.value * 1.3);
            } else if (percentageDifference.value <= -21) {
                config.lifeloss = Math.abs(percentageDifference.value * 2.6 + 21 * 1.3);
            }
            config.fuelloss = Math.abs(percentageDifference.value * 0.15);
        } else {
            config.lifeloss = 0;
            config.fuelloss = 0;
        }
    } else {
        config.lifeloss = 0;
        config.fuelloss = 0;
    }

    return config
})

const gaugedegrees = computed(() => {
    let lifelossDegrees = 0,
        fuellossDegrees = 0;

    if (gaugeValues.value.lifeloss) {
        lifelossDegrees = (gaugeValues.value.lifeloss / 60) * 270 - 25;
    } else {
        lifelossDegrees = -25;
    }

    if (gaugeValues.value.fuelloss) {
        fuellossDegrees = (gaugeValues.value.fuelloss / 5) * 270 - 25;
    } else {
        fuellossDegrees = -25;
    }

    return {
        fuellossDegrees,
        lifelossDegrees
    }
})

</script>

<template>
    <div class="flex flex-col xl:flex-row gap-8 xl:gap-16">
        <div class="flex flex-col gap-4 flex-none xl:max-w-72">
            <h3 class="font-bold">
                Inflation
            </h3>
            <p>Correct tyre inflation is vital to safety on the road. Under or over inflated tyres affect handling and grip and potentially cause irregular or unpredictable vehicle behaviour. Incorrectly inflated tyres are also more likely to suffer from dangerous sudden rapid deflation (a blowout) on high speed motorway journeys.</p>
            <p>Under inflated tyres require a bigger force to make them turn thus using more fuel, they will also wear out more quickly.</p>
        </div>
        <div class="flex flex-col gap-4 flex-none">
            <h3 class="font-bold">
                Calculate Inflation Manually
            </h3>
            <div class="flex flex-col">
                <label class="mb-2" for="correct-pressure">Correct Pressure</label>
                <input id="correct-pressure"
                       v-model="correctPressure"
                       type="number"
                       step="0.01"
                       class="p-4 border border-zinc-300 rounded-sm focus:border-red focus:outline-none"
                >
            </div>
            <div class="flex flex-col">
                <label class="mb-2" for="current-pressure">Current Pressure</label>
                <input id="current-pressure"
                       v-model="currentPressure"
                       type="number"
                       step="0.01"
                       class="p-4 border border-zinc-300 rounded-sm focus:border-red focus:outline-none"
                >
            </div>
            <span class="underline cursor-pointer" @click="resetValuesClickHandler">Reset Values</span>
            <div class="text-white p-4 rounded-sm text-center" :class="percentageDifference === 0 ? 'bg-black' : 'bg-gauge-red'">
                <span>{{ percentageDifferenceLabel }}</span>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row xl:flex-col gap-8 cursor-pointer shrink-0 flex-none items-start">
            <EssentialsGauge label-unit="% Reduction In Tyre Life"
                             :label="parseFloat(gaugeValues.lifeloss.toFixed(1))"
                             :dial-degrees="gaugedegrees.lifelossDegrees"
                             :min-dial-rotation="-25"
            />
            <EssentialsGauge label-unit="% Increase in Fuel Consumption"
                             :label="parseFloat(gaugeValues.fuelloss.toFixed(2))"
                             :dial-degrees="gaugedegrees.fuellossDegrees"
                             :min-dial-rotation="-25"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
