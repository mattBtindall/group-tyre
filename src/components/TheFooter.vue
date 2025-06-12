<script setup>
import VContainer from './app/VContainer.vue'
import footerLogoImage from "@/assets/images/logo_medium.svg"
const now = new Date()
const year = now.getFullYear()
</script>

<template>
    <footer>
        <VContainer>
            <div class="h-28 flex items-center">
                <div class="flex flex-col gap-4">
                    <img class="w-56" :src="footerLogoImage" alt="">
                    <span class="text-sm text-secondary">
                        &#xA9; Copyright 2008-{{ year }} GT
                    </span>
                </div>
            </div>
        </VContainer>
    </footer>
</template>

