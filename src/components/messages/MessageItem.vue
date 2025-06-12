<script setup>
import { useMessageStore } from '../../stores/MessageStore'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const messageStore = useMessageStore()
const timeoutId = ref()

const props = defineProps({
    message: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

onMounted(() => {
    timeoutId.value = setTimeout(() => {
        messageStore.removeMessageAt(props.id)
    }, 3000)
})

onBeforeUnmount(() => {
    clearTimeout(timeoutId.value)
})

let htmlClasses = 'text-white rounded-sm py-4 ps-4 pe-8 mb-4 flex gap-2 shadow-md '
switch (props.type) {
    case 'error':
        htmlClasses += 'bg-red'
        break
    case 'success':
        htmlClasses += 'bg-green'
        break
    default:
        htmlClasses += 'bg-zinc-500'
}

const closeClickHandler = () => {
    clearTimeout(timeoutId.value)
    messageStore.removeMessageAt(props.id)
}
</script>

<template>
    <li :class="htmlClasses">
        <svg class="w-6 cursor-pointer"
             focusable="false"
             viewBox="0 0 24 24"
             aria-hidden="true"
             role="presentation"
             fill="currentColor"
             @click="closeClickHandler"
        >
            <path
                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
        </svg>
        <span>{{ message }}</span>
    </li>
</template>


<style lang="scss" scoped>

</style>
