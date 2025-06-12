<script setup>
import { ref } from 'vue'

const props = defineProps({
    type: {
        type: String,
        required: false,
        default: ''
    },
    isLink: {
        type: Boolean,
        required: false,
        default: false
    },
    isExternalLink: {
        type: Boolean,
        required: false,
        default: false
    }
})

let classes
let elementType = ref('button')
switch (props.type) {
    case 'primary':
        classes = 'bg-black text-white hover:bg-turquoise hover:border-turquoise transition-colors dark:border-2 dark:border-white'
        break
    case 'secondary':
        classes = 'bg-red text-white hover:opacity-80 transition-opacity'
        break
    default:
}

if (props.isLink) {
    elementType.value = 'RouterLink'
} else if (props.isExternalLink) {
    elementType.value = 'a'
}
</script>

<template>
    <component :is="elementType" class="rounded-full block text-center" :class="classes">
        <slot />
    </component>
</template>

<style lang="scss" scoped>

</style>
