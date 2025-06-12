<script setup>
import MessageItem from './MessageItem.vue'
import { useMessageStore } from '../../stores/MessageStore';
const messageStore = useMessageStore()
</script>

<template>
    <TransitionGroup name="list" tag="ul" class="flex flex-col pb-8 ps-4 absolute bottom-0">
        <MessageItem v-for="message in messageStore.messages" :key="message.id" v-bind="message" />
    </TransitionGroup>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  transform: translateX(calc(-100% + -1rem));
}
</style>
