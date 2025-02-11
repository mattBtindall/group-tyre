<script setup>
const props = defineProps({
    type: {
        type: String,
        required: false,
        default: ''
    }
})

let classes
switch (props.type) {
    case 'primary':
        classes = 'bg-black text-white hover:bg-turquoise hover:border-turquoise transition-colors dark:border-2 dark:border-white'
        break
    case 'secondary':
        classes = 'bg-red  text-white hover:opacity-80 transition-opacity'
        break
    default:
}

</script>

<template>
    <button class="rounded-full" :class="classes">
        <slot />
    </button>
</template>

<style lang="scss" scoped>

</style>