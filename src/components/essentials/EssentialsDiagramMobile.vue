<script setup>
import { ref, useTemplateRef } from 'vue'
import { essentialsTitlesMap, essentialsTitlesIds, essentialsTitlesColourMap } from '../../salesDiagnosticsWheelKeys'
import VButton from '../app/VButton.vue'
import resourcesBackgroundImg from "@/assets/images/resources-background.png"

const emit = defineEmits(['labelClick'])
const image = useTemplateRef('image')
const essentialsTitlesIdsClone = Object.assign({}, essentialsTitlesIds)
delete essentialsTitlesIdsClone.VIDEO_ID
const essentialsIds = Object.values(essentialsTitlesIdsClone)
const activeWhere = ref(null)

function whereClickHandler(value) {
    activeWhere.value = value
    image.value.scrollIntoView({behavior: 'smooth'})
}

function detailsClickHandler(id) {
    emit('labelClick', id)
}
</script>

<template>
    <div class="flex flex-col gap-8 sm:hidden w-full">
        <nav class="">
            <ul class="flex flex-col gap-2">
                <li v-for="(id) in essentialsIds"
                    :key="id"
                    class="flex justify-between items-center"
                >
                    <span>{{ essentialsTitlesMap[id] }}</span>
                    <div class="flex gap-4 items-center">
                        <VButton type="secondary"
                                 class="py-1 px-3"
                                 :class="[essentialsTitlesColourMap[id]]"
                                 @click="whereClickHandler(id)"
                        >
                            Where?
                        </VButton>
                        <VButton type="secondary" class="py-1 px-3" @click="detailsClickHandler(id)">
                            Details
                        </VButton>
                    </div>
                </li>
            </ul>
        </nav>

        <div ref="image" class="relative flex justify-center items-center max-w-[300px] mx-auto">
            <img :src="resourcesBackgroundImg" alt="" class="shrink-0 w-[300px]">
            <ul>
                <li v-for="id in essentialsIds"
                    :key="id"
                    :class="[id, activeWhere === id ? 'block' : 'hidden', essentialsTitlesColourMap[id]]"
                    class="rounded-full bg-red w-5 h-5 absolute animate-pulse"
                />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.homologation_code {
    top: 1rem;
    left: 150px;
}

.valve_tpms {
    top: 200px;
    left: 3rem;
}

.balance_alignment {
    top: 145px;
    left: 120px;
}

.tread_depth {
    top: 145px;
    left: 160px;
}

.load_speed {
    top: 75px;
    left: 237px;
}

.tyre_size {
    top: 40px;
    left: 230px;
}

.contact_patch {
    top: 192px;
    left: 145px;
}
</style>