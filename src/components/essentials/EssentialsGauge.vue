<script setup>
import { computed } from 'vue'
import needleImg from "@/assets/images/needle.svg"
import gaugeImg from "@/assets/images/guage.svg"
import gaugeFlippedImg from "@/assets/images/guageflipped.svg"

const props = defineProps({
    label: {
        type: Number,
        required: true
    },
    labelUnit: {
        type: String,
        required: true
    },
    dialDegrees: {
        type: Number,
        required: true
    },
    minDialRotation: {
        type: Number,
        required: true
    },
    reversed: {
        type: Boolean,
        required: false,
        defualt: false
    }
})

// need to work out the degrees for the reversed colours, they don't work in symtery has the red spans the size of both of the greens
const labelColoour = computed(() => {
    if (!props.reversed) {
        if (props.dialDegrees >= props.minDialRotation && props.dialDegrees <= 16.25) {
            return 'text-gauge-dark-green'
        } else if (props.dialDegrees > 16.25 && props.dialDegrees <= 61.25) {
            return 'text-gauge-light-green'
        } else if (props.dialDegrees > 61.25 && props.dialDegrees <= 125) {
            return 'text-gauge-dark-orange'
        } else if (props.dialDegrees > 125 && props.dialDegrees <= 155) {
            return 'text-gauge-yellow'
        }
        return 'text-gauge-red'
    } else {
        if (props.dialDegrees >= props.minDialRotation && props.dialDegrees <= 40) {
            return 'text-gauge-red'
        } else if (props.dialDegrees > 40 && props.dialDegrees <= 71) {
            return 'text-gauge-yellow'
        } else if (props.dialDegrees > 71 && props.dialDegrees <= 133) {
            return 'text-gauge-dark-orange'
        } else if (props.dialDegrees > 133 && props.dialDegrees <= 81) {
            return 'text-gauge-light-green'
        }
        return 'text-gauge-dark-green'
    }
})

const labelStyles = computed(() => {
    const getPosition = (transform, bottom) => ({ transform, bottom})
    return props.labelUnit.length > 10 ? getPosition('translate(-47%)', '8px') : getPosition('translate(-36%)', '25px')
})
</script>

<template>
    <div class="relative shrink-0">
        <img :src="reversed ? gaugeFlippedImg : gaugeImg" alt="">
        <img class="relative bottom-20"
             style="transform-origin: 119px 12px; left: 2.1rem"
             :style="{transform: `rotate(${dialDegrees}deg)`}"
             :src="needleImg"
             alt=""
        >
        <div class="inline-flex flex-col absolute justify-center text-sm text-center left-1/2" :style="labelStyles">
            <div class="font-bold" :class="[labelColoour]">
                {{ label }}
            </div>
            <div class="text-nowrap">
                {{ labelUnit }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
