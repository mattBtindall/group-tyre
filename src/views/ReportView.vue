<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import ReportObservations from '../components/report/ReportObservations.vue'
import ReportSummary from '../components/report/ReportSummary.vue'

const car = ref(null)
const router = useRouter()
onMounted(() => {
    if (!router.options.history.state.hasOwnProperty('car')) {
        return
    }
    car.value = JSON.parse(router.options.history.state.car)
})

</script>

<template>
    <div class="flex flex-col sm:flex-row sm:gap-8 w-full overflow-hidden">
        <ReportSummary :reg="car ? car.reg : null" />
        <ReportObservations :car="car" />
    </div>
</template>

<style lang="scss" scoped>

</style>