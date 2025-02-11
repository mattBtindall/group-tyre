<script setup>
import { ref } from 'vue'
import EssentialsBalanceAlignmentCol from './EssentialsBalanceAlignmentCol.vue'
import EssentialsBalanceAlignmentImbalance from './EssentialsBalanceAlignmentImbalance.vue'
import tyreRotateImg from "@/assets/images/tyrerotate.png"
import wireframeImg from '@/assets/images/wireframe.png'

const alignmentIn = ref(true)
const toeOutText= "'Toe Out' is when the front edge of the tyres are farther apart than the rear edges. This may occur if the control arm bushings have collapsed. 'Toe Out' causes the tyres to scrub as they roll along. Only 1/8th inch of 'Toe Out' will scrub the tyres sideways 28 feet for every mile driven."
const toeInText  = "'Toe In' means the front edges of the tyre are pointing inwards (ie closer together than the rear edges) and are worn towards the inside. Tyres displaying rough edges signal ‘Toe In’"

function alingmentInOutClickHandler(value) {
    alignmentIn.value = value
}
</script>

<template>
    <div class="flex flex-col 3xl:flex-row gap-8">
        <EssentialsBalanceAlignmentCol title="Balance" description="A vibration felt most strongly through the steering wheel indicates a front wheel is out of balance. A vibration felt most strongly through the drivers seat indicates a rear wheel is out of balance. In addition to being annoying this vibration creates unnecessary wear on shocks, struts and other suspension components as well as creating un-even tyre wear and increased fuel consumption as the engine has to work harder to overcome the additional force.">
            <div class="flex flex-col gap-8">
                <EssentialsBalanceAlignmentImbalance title="Static Imbalance"
                                                     description="Static Imbalance occurs when there is a heavy spot in the tyre that prevents the tyre from rolling evenly and causing the tyre and wheel to undergo and up-and-down (or hopping) motion."
                                                     image-animation="wobble"
                />
                <EssentialsBalanceAlignmentImbalance title="Dynamic Imbalance"
                                                     description="Dynamic Imbalance occurs when there is unequal weight on one or both sides of the Tyre's assembly's lateral centreline, thus creating a side to side, or shimmy motion."
                                                     image-animation="buzz"
                />
            </div>
        </EssentialsBalanceAlignmentCol>
        <EssentialsBalanceAlignmentCol title="Alignment" description="Toe Alignment, or tracking as it is more commonly known, related to the parallelism between the wheels as viewed from above and is usually measured in inches or millimetres. When both front wheels are aimed straight ahead and the distance between the leading edges of both front tyres is exactly the same as the distance between the trailing edges, the wheels have’zero toe’ and are aligned.">
            <p>
                A classic sympton of toe misalignment is a feathered wear pattern across both front tyres.
            </p>
            <div class="flex flex-col lg:flex-row 2xl:flex-col 4xl:flex-row gap-4">
                <div class="flex flex-col gap-4">
                    <nav>
                        <ul class="flex gap-2">
                            <li :class="alignmentIn ? 'font-bold' : 'text-zinc-400'" class="cursor-pointer" @click="alingmentInOutClickHandler(true)">
                                Toe in
                            </li>
                            <li :class="!alignmentIn ? 'font-bold' : 'text-zinc-400'" class="cursor-pointer" @click="alingmentInOutClickHandler(false)">
                                Toe out
                            </li>
                        </ul>
                    </nav>
                    <p>{{ alignmentIn ? toeInText : toeOutText }}</p>
                </div>
                <div class="w-[316px] grow shrink-0 h-80 relative" :style="{backgroundImage: `url(${wireframeImg})`}">
                    <img :src="tyreRotateImg"
                         alt=""
                         class="absolute left-0 top-[70px] transition-all"
                         :class="{'rotate-[10deg]': alignmentIn}"
                    >
                    <img :src="tyreRotateImg"
                         alt=""
                         class="absolute right-0 top-[70px] transition-all"
                         :class="{'rotate-[-10deg]': alignmentIn}"
                    >
                </div>
            </div>
        </EssentialsBalanceAlignmentCol>
    </div>
</template>

<style lang="scss" scoped>

</style>
