<script setup>
import { inject } from 'vue'
import { carSideIds } from '../../salesDiagnosticsWheelKeys'
import VCar from '../app/VCar.vue'

const inputState = inject('inputState')
</script>

<template>
    <VCar
        :[carSideIds.FRONT_PASSENGER_SIDE_ID]="inputState[carSideIds.FRONT_PASSENGER_SIDE_ID]"
        :[carSideIds.FRONT_DRIVER_SIDE_ID]="inputState[carSideIds.FRONT_DRIVER_SIDE_ID]"
        :[carSideIds.REAR_PASSENGER_SIDE_ID]="inputState[carSideIds.REAR_PASSENGER_SIDE_ID]"
        :[carSideIds.REAR_DRIVER_SIDE_ID]="inputState[carSideIds.REAR_DRIVER_SIDE_ID]"
    />
    <!-- <VCar
        :[carSideIds.FRONT_PASSENGER_SIDE_ID]="inputState[carSideIds.FRONT_PASSENGER_SIDE_ID]"
    /> -->
</template>

<style lang="scss" scoped>

</style>