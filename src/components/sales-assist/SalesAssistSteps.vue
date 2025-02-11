<script setup>
import SalesAssistStep from './SalesAssistStep.vue'

const props = defineProps({
    stepNumber: {
        type: Number,
        required: true
    }
})

const steps = [
    'Enter vehicle registration',
    'Select the tyre(s) to be replaced and their issue report',
    'Generate report'
]
</script>

<template>
    <ol class="flex flex-col w-full sm:w-auto sm:flex-row gap-5">
        <SalesAssistStep v-for="(title, index) in steps"
                         :key="index"
                         :title="title"
                         :number="index + 1"
                         :active="index + 1 === stepNumber"
                         :completed="index + 1 < stepNumber"
        />
    </ol>
</template>

<style lang="scss" scoped>

</style>