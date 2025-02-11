<script setup>
import IndexTile from './IndexTile.vue'
import salesAssistImage from '@/assets/images/call-prep.jpg'
import essentialsImage from '@/assets/images/resources.jpg'
const tiles = [
    {
        title: 'Sales Assist',
        description: 'Generate a customer tyre status report and view recommendations',
        imgSrc: salesAssistImage,
        routeName: 'salesAssist'
    },
    {
        title: 'Essentials',
        description: 'View important tyre information and videos to increase tyre knowledge and assist in selling with confidence',
        imgSrc: essentialsImage,
        routeName: 'essentials'
    }
]
</script>

<template>
    <ol class="flex flex-col sm:flex-row gap-8 justify-around">
        <IndexTile v-for="tile in tiles" :key="tile.title" v-bind="tile" />
    </ol>
</template>

<style lang="scss" scoped>

</style>