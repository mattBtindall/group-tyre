<script setup>
import { ref, computed } from 'vue'
import { dial } from '../../../salesDiagnosticsWheelKeys'
import { mapRange } from '../../../utils/general'
import EssentialsLoadSpeed from './EssentialsLoadSpeed.vue'

const MIN_SPEED = 0
const MAX_SPEED = 186
const speedRatings = [
    { title: 'Q', speed: 99},
    { title: 'R', speed: 106},
    { title: 'S', speed: 112},
    { title: 'T', speed: 118},
    { title: 'H', speed: 130},
    { title: 'V', speed: 149},
    { title: 'W', speed: 168},
    { title: 'Y', speed: 186},
    { title: 'ZR', speed: 150},
]
const activeTitle = ref(null)

function handleRatingBtnClick(title) {
    activeTitle.value = title
}

const activeSpeedRating = computed(() => {
    const activeSpeedObj = speedRatings.find(sr => sr.title === activeTitle.value)
    if (!activeSpeedObj) {
        return 0
    }

    return activeSpeedObj.speed
})
const dialDegrees = computed(() => mapRange(activeSpeedRating.value, MIN_SPEED, MAX_SPEED, dial.MIN_DIAL_ROTATION, dial.MAX_DIAL_ROTATION))
</script>

<template>
    <EssentialsLoadSpeed
        title="Speed Rating"
        description="Each letter indicates a top speed that the tyre has been tested to and should not be exceeded."
        :dial-degrees="dialDegrees"
        :dial-number="activeSpeedRating"
        dial-label="mph"
    >
        <div class="relative mb-8">
            <div class="flex gap-2 flex-wrap">
                <button
                    v-for="{ title: ratingTitle } in speedRatings"
                    :key="ratingTitle"
                    class="p-4 bg-black text-white font-bold rounded-sm  transition-all"
                    :class="activeTitle === ratingTitle ? 'bg-turquoise' : 'hover:opacity-75'"
                    @click="handleRatingBtnClick(ratingTitle)"
                >
                    {{ ratingTitle }}
                </button>
            </div>
            <span v-if="activeTitle === 'ZR'" class="absolute pt-1">ZR rated tyres are tested to speeds in excess of 149MPH</span>
        </div>
    </EssentialsLoadSpeed>
</template>

<style lang="scss" scoped>

</style>
