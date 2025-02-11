<script setup>
import { tyreDamageTitleMap, carSideTitleMap } from '../../salesDiagnosticsWheelKeys'
import VCar from '../app/VCar.vue'
import ReportObservationSection from './ReportObservationSection.vue'

const props = defineProps({
    side: {
        type: String,
        required: true
    },
    tyreState: {
        type: String,
        required: true
    },
    definitions: {
        type: Array,
        required: true
    },
    causes: {
        type: Array,
        required: true
    },
    risks: {
        type: Array,
        required: true
    },
    last: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <li class="bg-white text-black px-2 pt-4 lg:px-8 lg:pt-8" :style="last ? { paddingBottom: '70px' } : ''">
        <div class="inner-container border-b border-zinc-300 flex gap-6" :class="{'pb-8': !last}">
            <div class="hidden lg:block w-1/5">
                <VCar
                    :[side]="tyreState"
                    :force-dark="true"
                />
            </div>

            <div class="w-fulll lg:w-4/5 flex flex-col gap-4">
                <header>
                    <h3 class="text-xl mb-3">
                        {{ carSideTitleMap[side] }}
                    </h3>
                    <span class="text-xl font-bold">{{ tyreDamageTitleMap[tyreState] }}</span>
                </header>
                <ReportObservationSection title="This means..." :list="definitions" />
                <ReportObservationSection bg-colour="bg-red-light"
                                          :icon="true"
                                          title="Possible Causes"
                                          :list="causes"
                                          :extra-cause-text="tyreState === 'severe'"
                />
                <ReportObservationSection bg-colour="bg-red-medium"
                                          :icon="true"
                                          title="Risks & Costs"
                                          :list="risks"
                />
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
li:last-of-type {
    .inner-container {
        border-bottom: none;
    }
}
</style>