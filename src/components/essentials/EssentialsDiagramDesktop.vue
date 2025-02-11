<script setup>
import { essentialsTitlesMap, essentialsTitlesIds } from '../../salesDiagnosticsWheelKeys'
import tyre from '../../assets/images/resources/tyre.jpg'
import tyreOutline from '../../assets/images/resources/tyre-outline.png'

defineEmits(['labelClick'])
</script>

<template>
    <svg width="1027px"
         height="523px"
         viewBox="0 0 1027 523"
         version="1.1"
         class="md:pe-24 overflow-visible hidden sm:block"
    >
        <title>Group 6</title>
        <defs>
            <rect
                id="path-1"
                x="0"
                y="1.8189894e-12"
                width="245"
                height="245"
                rx="122.5"
            />
        </defs>
        <g
            id="Templates"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g
                id="gt_resources-copy-2"
                transform="translate(-177.000000, -296.000000)"
            >
                <g id="Group-6" transform="translate(176.000000, 296.000000)">
                    <g id="Group-4" transform="translate(289.000000, 0.000000)">
                        <image
                            id="Bitmap"
                            x="0"
                            y="0"
                            width="523"
                            height="523"
                            :xlink:href="tyreOutline"
                        />
                        <g
                            id="iStock-939038580"
                            transform="translate(261.500000, 261.500000) rotate(-180.000000) translate(-261.500000, -261.500000) translate(139.000000, 139.000000)"
                        >
                            <mask id="mask-2" fill="white">
                                <use xlink:href="#path-1" />
                            </mask>
                            <use id="Mask" fill="#FFFFFF" xlink:href="#path-1" />
                            <image
                                mask="url(#mask-2)"
                                x="-74"
                                y="-16"
                                width="394"
                                height="434"
                                :xlink:href="tyre"
                            >
                                <g transform="translate(123.000000, 201.000000) rotate(-180.000000) translate(-123.000000, -201.000000) " />
                            </image>
                        </g>
                        <circle
                            id="Oval"
                            stroke="#383838"
                            cx="262"
                            cy="262"
                            r="147"
                        />
                    </g>
                    <g id="Group-2" transform="translate(0.000000, 16.000000)">
                        <circle
                            id="Oval-Copy-4"
                            fill="#E93323"
                            cx="565"
                            cy="23"
                            r="8"
                        />
                        <circle
                            id="Oval-Copy"
                            fill="#E93323"
                            cx="381"
                            cy="344"
                            r="8"
                        />
                        <text
                            id="HomologationCode"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.HOMOLOGATION_ID)"
                        >
                            <tspan x="819" y="20">
                                {{ essentialsTitlesMap[essentialsTitlesIds.HOMOLOGATION_ID] }}
                            </tspan>
                        </text>
                        <text
                            id="ValveTPMS"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.VALVE_TPMS_ID)"
                        >
                            <tspan x="96" y="388">
                                {{ essentialsTitlesMap[essentialsTitlesIds.VALVE_TPMS_ID] }}
                            </tspan>
                        </text>
                        <text
                            id="BalanceAlignment"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.BALANCE_ALINGMENT_ID)"
                        >
                            <tspan x="0" y="234">
                                {{ essentialsTitlesMap[essentialsTitlesIds.BALANCE_ALINGMENT_ID] }}
                            </tspan>
                        </text>
                        <circle
                            id="Oval"
                            stroke="#383838"
                            cx="551"
                            cy="246"
                            r="147"
                        />
                        <g
                            id="Group"
                            transform="translate(550.500000, 245.500000) rotate(-180.000000) translate(-550.500000, -245.500000) translate(428.000000, 123.000000)"
                        />
                        <text
                            id="TreadDepth"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.TREAD_DEPTH_ID)"
                        >
                            <tspan x="902" y="282">
                                {{ essentialsTitlesMap[essentialsTitlesIds.TREAD_DEPTH_ID] }}
                            </tspan>
                        </text>
                        <text
                            id="LoadIndex"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.LOAD_SPEED_ID)"
                        >
                            <tspan x="889" y="142">
                                {{ essentialsTitlesMap[essentialsTitlesIds.LOAD_SPEED_ID] }}
                            </tspan>
                        </text>
                        <text
                            id="TyreSize"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.TYRE_SIZE_ID)"
                        >
                            <tspan x="848" y="72">
                                {{ essentialsTitlesMap[essentialsTitlesIds.TYRE_SIZE_ID] }}
                            </tspan>
                        </text>
                        <text
                            id="ContactPatch"
                            fill="#000000"
                            class="essentials-text"
                            @click="$emit('labelClick', essentialsTitlesIds.CONTACT_PATCH_ID)"
                        >
                            <tspan x="887" y="361">
                                {{ essentialsTitlesMap[essentialsTitlesIds.CONTACT_PATCH_ID] }}
                            </tspan>
                        </text>
                        <circle
                            id="Oval-Copy-7"
                            fill="#E93323"
                            cx="695"
                            cy="102"
                            r="8"
                        />
                        <circle
                            id="Oval-Copy-11"
                            fill="#E93323"
                            cx="675"
                            cy="70"
                            r="8"
                        />
                        <polyline
                            id="Path-2"
                            stroke="#E93323"
                            strokeWidth="2"
                            points="221 225 243 212 514 212"
                        />
                        <polyline
                            id="Path-4"
                            stroke="#E93323"
                            strokeWidth="2"
                            points="227 381 350.150177 381 381 344"
                        />
                        <polyline
                            id="Path-5"
                            stroke="#E93323"
                            strokeWidth="2"
                            points="800.054763 10 589 10 565 23"
                        />
                        <polyline
                            id="Path-9"
                            stroke="#E93323"
                            strokeWidth="2"
                            points="879.109525 132 848.422963 103 695 103"
                        />
                        <polyline
                            id="Path-9-Copy"
                            stroke="#E93323"
                            strokeWidth="2"
                            points="832 62 692.474871 62 676.905041 70.4906748"
                        />
                        <path
                            id="Path-11"
                            d="M879.109525,272 C877.776192,272 795.40635,271 632,269 L581,212"
                            stroke="#E93323"
                            strokeWidth="2"
                        />
                        <polyline
                            id="Path-12"
                            stroke="#E93323"
                            strokeWidth="2"
                            points="550 331 848.625673 331 879.109525 352"
                        />
                        <circle
                            id="Oval-Copy-9"
                            fill="#E93323"
                            cx="550"
                            cy="331"
                            r="8"
                        />
                        <circle
                            id="Oval-Copy-10"
                            fill="#E93323"
                            cx="581"
                            cy="212"
                            r="8"
                        />
                        <path id="Path-6" d="" stroke="#979797" />
                        <circle
                            id="Oval-Copy-5"
                            fill="#E93323"
                            cx="514"
                            cy="212"
                            r="8"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
</template>

<style lang="scss" scoped>
.essentials-text {
    @apply font-bold text-xl cursor-pointer hover:underline dark:fill-white;
}
</style>