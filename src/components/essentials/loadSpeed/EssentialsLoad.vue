<script setup>
import { computed, ref } from 'vue'
import { mapRange } from '../../../utils/general'
import { dial } from '../../../salesDiagnosticsWheelKeys'
const { MIN_DIAL_ROTATION, MAX_DIAL_ROTATION } = dial
import EssentialsLoadSpeed from './EssentialsLoadSpeed.vue'

const MIN_LOAD = 62
const MAX_LOAD = 126
const MIN_WEIGHT = 265
const MAX_WEIGHT = 1700

const loadValue = ref(MIN_LOAD)
const dialDegrees = computed(() => mapRange(loadValue.value, MIN_LOAD, MAX_LOAD, MIN_DIAL_ROTATION, MAX_DIAL_ROTATION))
const weight = computed(() => Math.round(mapRange(loadValue.value, MIN_LOAD, MAX_LOAD, MIN_WEIGHT, MAX_WEIGHT)))
</script>

<template>
    <EssentialsLoadSpeed title="Load Index"
                         :dial-degrees="dialDegrees"
                         dial-label="kg"
                         :dial-number="weight"
                         description="The Load Index of the tyre is a numerical indication of the maximum load that the tyre can carry at the speed indicated by its speed symbol and at a given inflation pressure."
    >
        <input v-model="loadValue"
               type="number"
               :min="MIN_LOAD"
               :max="MAX_LOAD"
               class="p-4 border border-zinc-300 rounded-sm focus:border-red focus:outline-none mb-8"
        >
    </EssentialsLoadSpeed>
</template>

<style lang="scss" scoped>

</style>
