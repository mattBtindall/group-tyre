import { defineStore } from "pinia"
import { colourModeIds, localStorageKeys } from "../salesDiagnosticsWheelKeys"
import { getLocalStorage } from "../utils/localStorage"
const { LIGHT_ID, DARK_ID, AUTO_ID } = colourModeIds
const { COLOUR_MODE_KEY, MAIN_KEY } = localStorageKeys

export const useColourModeStore = defineStore('ColourModeStore', {
    state: () => ({
        colourMode: null,
        media: window.matchMedia('(prefers-color-scheme: dark)')
    }),
    getters: {
        invertedColourMode() {
            return this.colourMode === LIGHT_ID ? DARK_ID : LIGHT_ID
        }
    },
    actions: {
        init() {
            const initialValue = this.getLocalStorageValue() || AUTO_ID
            this.setMode(initialValue)
        },
        getSystemSettings() {
            return this.media.matches ? DARK_ID : LIGHT_ID
        },
        setHtmlElementClass() {
            document.documentElement.classList.add(this.colourMode)
            document.documentElement.classList.remove(this.invertedColourMode)
        },
        systemThemeEventListener(e) {
            this.colourMode = e.matches ? DARK_ID : LIGHT_ID
            this.setHtmlElementClass()
        },
        setLocalStorageValue(newMode) {
            const localStorageValue = getLocalStorage()
            localStorageValue[COLOUR_MODE_KEY] = newMode
            localStorage.setItem(MAIN_KEY, JSON.stringify(localStorageValue))
        },
        getLocalStorageValue() {
            return getLocalStorage()[COLOUR_MODE_KEY]
        },
        setMode(mode) {
            if (mode === AUTO_ID) {
                this.media.addEventListener('change', this.systemThemeEventListener)
                this.colourMode = this.getSystemSettings()
            } else {
                this.media.removeEventListener('change', this.systemThemeEventListener)
                this.colourMode = mode
            }

            this.setLocalStorageValue(mode)
            this.setHtmlElementClass()
        }
    }
})
