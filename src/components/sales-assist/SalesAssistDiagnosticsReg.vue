<script setup>
import validation from 'uk-numberplate-format'

const emit = defineEmits(['inputChange'])
function handleInput({ target }) {
    const value = target.value.trim()
    validation.validate(value, function(err, data) {
        emit('inputChange', err ? null : value)
    })
}
</script>

<template>
    <div class="flex flex-col pb-3 mb-3 border-b border-zinc-700">
        <label class="text-lg mb-1" for="reg">Step 1: Enter Vehicle Registration</label>
        <input id="reg"
               class="text-center bg-reg-yellow text-black focus:outline-none py-3 rounded-md font-number-plate text-xl placeholder:text-black/25"
               placeholder="A123 ABC"
               type="text"
               @input="handleInput"
        >
    </div>
</template>

