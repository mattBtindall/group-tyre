<script setup>
import glossaryTerms from '../../glossaryTerms'
import { computed, ref, watch } from 'vue'
import GlossaryItem from './GlossaryItem.vue'
import VButton from '../app/VButton.vue'

const showAll = ref(false)
const searchTerms = glossaryTerms.map(gt => gt.title)
const termMatches = ref([])
const matches = computed(() => {
    switch (termMatches.value) {
        case 'Not enough characters':
            return [{ title: 'Not enough characters', definition: "Please enter more characters to perform a search"}]
        case 'No term found':
            return [{ title: 'No term found', definition: "No term found, please use a different search term"}]
        default:
            return glossaryTerms.filter(gt => termMatches.value.includes(gt.title))
    }
})

function keydownHandler(e) {
    const inputValue = e.target.value.trim().toLowerCase()
    if (inputValue.length === 0) {
        termMatches.value = []
        return
    } else if (inputValue.length < 3) {
        termMatches.value = 'Not enough characters'
        return
    }

    termMatches.value = searchTerms.filter(searchTerm => searchTerm.toLowerCase().includes(inputValue))

    if (!termMatches.value.length) {
        termMatches.value = 'No term found'
    }
}

function viewAllHandler() {
    if (showAll.value) {
        termMatches.value = []
        showAll.value = false
    } else {
        termMatches.value = searchTerms
        showAll.value = true
    }
}
</script>

<template>
    <div class="flex mb-8 gap-3">
        <input tabindex="-1"
               class="w-full p-3 border-2 border-black focus:outline-none focus:border-red"
               type="text"
               :placeholder="showAll ? 'Showing all' : 'e.g. Contact Patch'"
               :disabled="showAll"
               @input="keydownHandler"
        >
        <VButton tabindex="-1"
                 type="primary"
                 class="py-2 px-3 shrink-0"
                 @click="viewAllHandler"
        >
            {{ showAll ? 'Enable Search' : 'View All' }}
        </VButton>
    </div>
    <ol v-if="matches.length">
        <GlossaryItem v-for="match in matches" :key="match.title" v-bind="match" />
    </ol>
</template>

<style lang="scss" scoped>

</style>