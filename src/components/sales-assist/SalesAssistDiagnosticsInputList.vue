<script setup>
import { inject, computed } from 'vue'
import { tyreLabelValueMap } from '../../salesDiagnosticsWheelKeys'

const emit = defineEmits(['selected'])
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    outputText: {
        type: String,
        required: true
    }
})

const changeState = inject('changeState')
const options = [
    "Select an issue",
    "No issue",
    "Remaining tread between 3mm & 2mm is 50% and 80% worn",
    "Remaining tread between 2mm & 1.6mm is 80% and 100% worn",
    "Uneven Wear",
    "Damaged Tyre"
]


const optionIndex = computed(() => options.indexOf((props.outputText)))
const topOffset = computed(() => {
    if (!optionIndex.value || optionIndex.value === -1) {
        return -1
    }
    return optionIndex.value * 40 * -1
})

function handleClick(option) {
    changeState(props.id, tyreLabelValueMap[option])
    emit('selected')
}
</script>

<template>
    <ol v-if="active"
        class="absolute bg-white py-2 shadow-xl z-10"
        style="width: calc(100% + 2px); left: -1px;"
        :style="{top: `${topOffset}px`}"
    >
        <li v-for="(option, index) in options"
            :key="index"
            class="py-2 px-4"
            :class="{'bg-zinc-300': index === optionIndex, 'hover:bg-zinc-100': index !== optionIndex, 'text-red': index > 1 }"
            @click.stop="handleClick(option)"
        >
            {{ option }}
        </li>
    </ol>
</template>

<style lang="scss" scoped>

</style>
