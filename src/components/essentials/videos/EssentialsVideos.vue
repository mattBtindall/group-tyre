<script setup>
import { ref, computed } from 'vue'
import VDrawer from '../../app/VDrawer.vue'
import EssentialsVideoThumbnail from './EssentialsVideoThumbnail.vue'
import EssentialsVideo from './EssentialsVideo.vue'
import videos from '../../../Videos'

const activeVideoTitle = ref(null)
const activeVideo = computed(() => {
    if (!activeVideoTitle.value) {
        return
    }
    const video = videos.find(v => v.title === activeVideoTitle.value)
    const videoClone = {...video}
    delete videoClone.placeholder
    return videoClone
})

function handleVideoClick(title) {
    activeVideoTitle.value = title
}

function closeVideoDrawer() {
    activeVideoTitle.value = null
}

</script>

<template>
    <ol class="flex flex-wrap">
        <EssentialsVideoThumbnail v-for="(video, index) in videos"
                                  :key="index"
                                  v-bind="video"
                                  @video-click="handleVideoClick"
        />
    </ol>
    <Teleport to="#app">
        <VDrawer
            title="Video"
            :show="!!activeVideoTitle"
            @close="closeVideoDrawer"
        >
            <EssentialsVideo v-if="activeVideoTitle" v-bind="activeVideo" @close="closeVideoDrawer" />
        </VDrawer>
    </Teleport>
</template>

<style lang="scss" scoped>

</style>
