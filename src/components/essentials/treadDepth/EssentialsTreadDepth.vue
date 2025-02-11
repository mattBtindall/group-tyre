<script setup>
import { ref, computed } from 'vue'
import { mapRange } from '../../../utils/general'
import treadDepths, { defaultTeadDepthConfig } from '../../../treadDepths'
import EssentialsGauge from './../EssentialsGauge.vue'
import EssentialsTreadDepthBrakingForce from './EssentialsTreadDepthBrakingForce.vue'

const activeTreadDepthIndex = ref(null)
const activeTreadDepth = computed(() => treadDepths[activeTreadDepthIndex.value] || defaultTeadDepthConfig)

function treadDepthClickHandler(depth) {
    const index = treadDepths.findIndex(td => td.depth === depth)
    activeTreadDepthIndex.value = index
}

const stoppingDistanceDialDegrees = computed(() => mapRange(activeTreadDepth.value.increase, treadDepths[0].increase, treadDepths[treadDepths.length - 1].increase, -25, 137))
const config = computed(() => {
    const setConfig = (label, degrees, progressBarColour) => ({ label, degrees, progressBarColour })

    if (activeTreadDepthIndex.value === 0) {
        return setConfig(6.4, 191, '[&::-moz-progress-bar]:bg-black')
    } else if (activeTreadDepthIndex.value === 1) {
        return setConfig(5.4, 157, '[&::-moz-progress-bar]:bg-gauge-dark-green')
    } else if (activeTreadDepthIndex.value === 2) {
        return setConfig(4.4, 123, '[&::-moz-progress-bar]:bg-gauge-dark-green')
    } else if (activeTreadDepthIndex.value === 3) {
        return setConfig(3.4, 89, '[&::-moz-progress-bar]:bg-gauge-dark-green')
    } else if (activeTreadDepthIndex.value === 4) {
        return setConfig(2.4, 56, '[&::-moz-progress-bar]:bg-gauge-dark-orange')
    } else if (activeTreadDepthIndex.value === 5) {
        return setConfig(1.4, 22.5, '[&::-moz-progress-bar]:bg-gauge-red')
    } else if (activeTreadDepthIndex.value === 6) {
        return setConfig(0.4, -11, '[&::-moz-progress-bar]:bg-gauge-red')
    }

    return setConfig(0, -25, '[&::-moz-progress-bar]:bg-gauge-red')
})

const wearProgressLabelPosition = computed(() => `${100 - activeTreadDepth.value.wear}%`)
</script>

<template>
    <div class="flex flex-col 2xl:flex-row items-start 2xl:items-stretch gap-16">
        <div>
            <h3 class="font-bold mb-2">
                Select Tread Depth (mm)
            </h3>
            <div class="flex flex-wrap 2xl:flex-col gap-2">
                <button v-for="(treadDepth, index) in treadDepths"
                        :key="treadDepth.label"
                        class="p-4 bg-black text-white rounded"
                        :class="index === activeTreadDepthIndex ? 'bg-turquoise' : 'hover:opacity-75'"
                        @click="treadDepthClickHandler(treadDepth.depth)"
                >
                    {{ treadDepth.label }}
                </button>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row 2xl:flex-col gap-12 2xl:gap-8 min-w-[300px]">
            <EssentialsGauge
                label-unit="% increase in stopping distance"
                :label="activeTreadDepth.increase"
                :min-dial-rotation="-25"
                :dial-degrees="stoppingDistanceDialDegrees"
            />
            <EssentialsGauge
                label-unit="remaining tread (mm)"
                :label="config.label"
                :min-dial-rotation="-25"
                :dial-degrees="config.degrees"
                reversed
            />
        </div>
        <div class="flex flex-col justify-around w-full lg:w-160">
            <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                    <span>% wear at {{ activeTreadDepth.depth }}mm</span>
                    <span>maximum wear</span>
                </div>
                <div class="relative">
                    <progress :value="activeTreadDepth.wear"
                              min="0"
                              max="100"
                              class="min-h-10 bg-black w-full h-full"
                              :class="[config.progressBarColour]"
                    />
                    <span class="z-10 text-white absolute -translate-y-1/2 top-1/2 pe-2" :style="{right: wearProgressLabelPosition}">{{ activeTreadDepth.wear }}%</span>
                </div>
            </div>
            <EssentialsTreadDepthBrakingForce :tread-depth="activeTreadDepth.depth" :distance="activeTreadDepth.distance" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
