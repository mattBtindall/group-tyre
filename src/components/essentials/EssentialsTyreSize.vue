<script setup>
import sidewallheadertyreImg from "@/assets/images/sidewallheadertyre.jpg"
</script>

<template>
    <div class="overflow-hidden h-18 md:h-24 2xl:h-52 mb-12">
        <img :src="sidewallheadertyreImg" alt="" class="rotate-38">
    </div>
    <p class="font-bold mb-4">
        245/40R20 - the size of the tyre
    </p>
    <ul class="list-disc ps-4">
        <li>
            245 represents the width of the tyre expressed in millimetres
        </li>
        <li>
            40 represents the height of the sidewall as a percentage of the
            width (ie 40% of 245mm). This is also known as the Aspect Ratio
        </li>
        <li>R represents the type of construction (Radial)</li>
        <li>
            20 represents the diameter of the wheel the tyre is designed to
            fit, expressed in inches
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>
