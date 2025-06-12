import { defineStore } from "pinia"

export const useMessageStore = defineStore('MessageStore', {
    state: () => ({
        messages: []
    }),
    actions: {
        addMessage(msgConfig) {
            if (this.messages.length > 2) {
                this.messages.pop()
            }
            this.messages.unshift({...msgConfig, id: Math.random().toString(16).slice(2)})
        },
        removeMessageAt(id) {
            const idx = this.messages.findIndex(msg => msg.id === id)
            if (idx > -1) {
                this.messages.splice(idx, 1)
            }
        },
        shiftMessage() {
            this.messages.shift()
        }
    }
})

