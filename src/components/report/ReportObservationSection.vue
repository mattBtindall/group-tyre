<script setup>
import { computed } from 'vue'
import downArrowImg from "@/assets/images/icons/down-arrow.svg"
import warningImg from "@/assets/images/icons/warning.svg"
import warningRedImg from "@/assets/images/icons/warning-red.svg"

const props = defineProps({
    icon: {
        type: Boolean,
        required: false,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    list: {
        type: Array,
        required: true
    },
    bgColour: {
        type: [String, null],
        required: false,
        default: null
    },
    extraCauseText: {
        type: Boolean,
        required: false,
        default: false
    }
})

const containerClasses = computed(() => props.bgColour ? [props.bgColour, 'p-4'] : '')
</script>

<template>
    <div :class="containerClasses">
        <header class="mb-4 flex gap-2">
            <img v-if="icon"
                 :src="downArrowImg"
                 alt=""
                 class="w-4"
            >
            <h4 class="font-bold">
                {{ title }}
            </h4>
        </header>
        <template v-if="extraCauseText">
            <div class="flex gap-2 mb-4">
                <img class="w-4" :src="warningImg" alt="">
                <span class="font-bold">The tyre is nearing the end of its natural cycle</span>
            </div>
            <div class="flex gap-2 mb-4">
                <img class="w-4" :src="warningRedImg" alt="">
                <span class="font-bold">Ask The Questions</span>
            </div>
        </template>
        <ul :class="bgColour ? 'ps-8' : 'ps-4'">
            <li v-for="(listItem, index) in list" :key="index" class="mb-1 list-disc last-of-type:mb-0">
                {{ listItem }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
</style>
