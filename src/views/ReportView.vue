<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import ReportObservations from '../components/report/ReportObservations.vue'
import ReportSummary from '../components/report/ReportSummary.vue'

const car = ref(null)
const router = useRouter()
const route = useRoute()
onMounted(async () => {
    if (!route.params.id && route.params.id !== 0) {
        return router.push({name: 'salesAssist'})
    }

    // we don't always have access to the state on the router
    // if a user vists the url directly it won't be present!
    const routerCarState = router.options.history.state.car
    if (routerCarState) {
        return car.value = JSON.parse(routerCarState)
    }

    const res = await fetch(`${import.meta.env.VITE_API_UL}report/${route.params.id}`)
    const parsedData = await res.json()
    if (parsedData.message) {
        router.push({name: 'salesAssist'})
    }
    car.value = parsedData.data
})
</script>

<template>
    <div v-if="car" class="flex flex-col sm:flex-row sm:gap-8 w-full overflow-hidden">
        <ReportSummary :reg="car ? car.reg : null" />
        <ReportObservations :car="car" />
    </div>
</template>

<style lang="scss" scoped>

</style>
