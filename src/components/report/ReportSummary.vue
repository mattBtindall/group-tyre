<script setup>
import warningRedImg from "@/assets/images/icons/warning-red.svg"
defineProps({
    reg: {
        type: [String, null],
        required: true
    }
})
</script>

<template>
    <div class="hidden sm:block w-2/5">
        <header class="mb-2">
            <h2 class="text-2xl font-bold py-3">
                Report Summary
            </h2>
        </header>
        <div class="py-2 px-4 font-number-plate bg-reg-yellow text-black rounded-md text-xl inline-block mb-8">
            {{ reg }}
        </div>
        <div class="p-8 border-4 border-red relative">
            <p class="flex gap-2 mb-8">
                <img class="w-4" :src="warningRedImg" alt="">
                <span>Don&apos;t forget to talk about</span>
            </p>
            <h3 class="font-bold text-2xl mb-4">
                Risks
            </h3>
            <p class="mb-4">
                Continuing to drive the vehicle with worn tyres has a significant effect
                on the ability of the vehicle to stop. At 80% worn the stopping distance
                for the vehicle increases by 14 metres and even more in wet conditions
            </p>
            <p>
                The effectiveness of the contact patch to grip the road surface and
                distribute water from the centre of the tyre outwards is greatly
                affected
            </p>
            <div class="triangle-outer" />
            <div class="triangle-inner" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.triangle {
    &-outer,
    &-inner {
        left: 30px;
        width: 0;
        bottom: -70px;
        height: 0;
        position: absolute;
        border-top: 70px solid #E93323;
        border-left: 70px solid transparent;
        border-right: 70px solid transparent;
    }

    &-inner {
        bottom: -63px;
        z-index: 2;
        border-top-color: black;
    }
}

.light {
    .triangle-inner {
        border-top-color: white;
    }
}
</style>
