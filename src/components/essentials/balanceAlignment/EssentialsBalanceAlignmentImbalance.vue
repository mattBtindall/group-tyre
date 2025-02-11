<script setup>
import { computed } from 'vue';
import tyreImg from "@/assets/images/tyre.png"

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageAnimation: {
        type: String,
        required: true
    }
})

const animationClass = computed(() => props.imageAnimation === 'wobble' ? 'vertical' : 'buzz')
</script>

<template>
    <div class="flex gap-4 items-start">
        <img :src="tyreImg"
             alt=""
             class="shrink-0 w-[59px]"
             :class="animationClass"
        >

        <div class="flex flex-col gap-4 justify-center">
            <h4 class="font-bold text-xl uppercase">
                {{ title }}
            </h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.vertical {
    animation: wobble-vertical 2s ease-in-out infinite;
}

.buzz {
    animation: buzz 2s ease-in-out infinite;
}

@keyframes wobble-vertical {
	0% {
		transform: translateY(0px);
	}
	25% {
		transform: translateY(5px);
	}
	50% {
		transform: translateY(-5px);
	}
	75% {
		transform: translateY(5px);
	}
	100% {
		transform: translateY(0px);
	}
}

@keyframes buzz {
	0% {
		transform: translateX(-3px) rotate(-2deg);
	}
	25% {
		transform: translateX(3px) rotate(2deg);
	}
	50% {
		transform: translateX(-3px) rotate(-2deg);
	}
	75% {
		transform: translateX(3px) rotate(2deg);
	}
	100% {
		transform: translateX(-3px) rotate(-2deg);
	}
}
</style>