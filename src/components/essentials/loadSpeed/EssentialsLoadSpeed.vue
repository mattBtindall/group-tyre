<script setup>
import { dial } from '../../../salesDiagnosticsWheelKeys'
import EssentialsGauge from '../EssentialsGauge.vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    dialDegrees: {
        type: Number,
        required: true
    },
    dialNumber: {
        type: Number,
        required: true
    },
    dialLabel: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col gap-8 items-start min-w-[300px] max-w-[475px]">
        <div class="flex flex-col gap-2 items-start self-start">
            <div class="font-bold">
                {{ title }}
            </div>
            <slot />
        </div>
        <EssentialsGauge :dial-degrees="dialDegrees"
                         :label="dialNumber"
                         :label-unit="dialLabel"
                         :min-dial-rotation="dial.MIN_DIAL_ROTATION"
        />
        <p>{{ description }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>