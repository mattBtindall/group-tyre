<script setup>
import { computed } from 'vue'
import EssentialsTreadDepthBrakingForceBar from './EssentialsTreadDepthBrakingForceBar.vue'
import busImg from '@/assets/images/bus.svg'
import busGreyImg from '@/assets/images/busGrey.svg'

const props = defineProps({
    treadDepth: {
        type: [Number, null],
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
})

const classes = computed(() => {
    const setConfig = (width, barColour = 'before:bg-gauge-light-green') => ({ width, barColour})
    if (props.treadDepth === 8) {
        return setConfig('w-3/12')
    } else if (props.treadDepth === 7) {
        return setConfig('w-4/12')
    } else if (props.treadDepth === 6) {
        return setConfig('w-5/12')
    } else if (props.treadDepth === 5) {
        return setConfig('w-6/12')
    } else if (props.treadDepth === 4) {
        return setConfig('w-7/12', 'before:bg-gauge-dark-orange')
    } else if (props.treadDepth === 3) {
        return setConfig('w-8/12', 'before:bg-gauge-red')
    } else if (props.treadDepth === 2) {
        return setConfig('w-9/12', 'before:bg-gauge-red')
    } else if (props.treadDepth === 1.6) {
        return setConfig('w-10/12', 'before:bg-gauge-red')
    }

    return setConfig('w-1/12', 'before:bg-gauge-light-green')
})

const staticBarClasses = computed(() => `w-${!props.treadDepth ? '1' : '3'}/12 before:bg-gauge-light-green`)
</script>

<template>
    <div class="flex flex-col gap-4 border-s-8 border-b-8 border-zinc-500 py-4">
        <EssentialsTreadDepthBrakingForceBar :tread-depth="!treadDepth ? null : 8" :braking-force="!treadDepth ? null : 26.5" :class="staticBarClasses" />
        <EssentialsTreadDepthBrakingForceBar :tread-depth="treadDepth" :braking-force="distance" :class="[classes.width, classes.barColour]" />
        <div class="h-14 relative">
            <div class="h-full w-full absolute" :style="{backgroundImage: `url(${busGreyImg})`}" />
            <div class="h-full absolute" :class="!treadDepth ? 'w-0' : classes.width" :style="{backgroundImage: `url(${busImg})`}" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
