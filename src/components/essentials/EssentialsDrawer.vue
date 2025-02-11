<script setup>
import { computed } from 'vue';
import { essentialsTitlesMap, essentialsTitlesIds } from '../../salesDiagnosticsWheelKeys'
import VDrawer from '../app/VDrawer.vue'
import EssentialsVideos from './videos/EssentialsVideos.vue'
import EssentialsHomologationCode from './EssentialsHomologationCode.vue'
import EssentialsTyreSize from './EssentialsTyreSize.vue'
import EssentialsLoadSpeedRoot from './loadSpeed/EssentialsLoadSpeedRoot.vue'
import EssentialsTreadDepth from './treadDepth/EssentialsTreadDepth.vue'
import EssentialsContactPatch from './EssentialsContactPatch.vue'
import EssentialsValveTpms from './EssentialsValveTpms.vue'
import EssentialsBalanceAlignment from './balanceAlignment/EssentialsBalanceAlignment.vue'

const props = defineProps({
    id: {
        type: [String, null],
        required: true
    }
})
defineEmits(['close'])

const config = computed(() => {
    const getConfig = (component, width) => ({ component, width})
    switch (props.id) {
        case essentialsTitlesIds.HOMOLOGATION_ID:
            return getConfig(EssentialsHomologationCode, null)
        case essentialsTitlesIds.TYRE_SIZE_ID:
            return getConfig(EssentialsTyreSize, null)
        case essentialsTitlesIds.LOAD_SPEED_ID:
            return getConfig(EssentialsLoadSpeedRoot, 'w-1/2 min-w-[340px]')
        case essentialsTitlesIds.TREAD_DEPTH_ID:
            return getConfig(EssentialsTreadDepth, 'w-3/4 min-w-[340px]')
        case essentialsTitlesIds.CONTACT_PATCH_ID:
            return getConfig(EssentialsContactPatch)
        case essentialsTitlesIds.VALVE_TPMS_ID:
            return getConfig( EssentialsValveTpms, 'w-4/5 2xl:w-3/4 4xl:w-1/2 min-w-[340px]')
        case essentialsTitlesIds.BALANCE_ALINGMENT_ID:
            return getConfig(EssentialsBalanceAlignment, 'w-1/2 min-w-[340px]')
        case essentialsTitlesIds.VIDEO_ID:
            return getConfig(EssentialsVideos, null)
        default:
            return {
                component: null,
                width: null
            }
    }
})
const width = computed(() => ({ ...config.value.width && { width: config.value.width } }))
</script>

<template>
    <Teleport to="#app">
        <VDrawer
            :title="essentialsTitlesMap[id] ?? null"
            :show="!!id"
            v-bind="width"
            :hide-on-mobile="false"
            @close="$emit('close')"
        >
            <component :is="config.component" />
        </VDrawer>
    </Teleport>
</template>

<style lang="scss" scoped>

</style>