import { localStorageKeys } from "../salesDiagnosticsWheelKeys"
const { MAIN_KEY } = localStorageKeys

export function getLocalStorage() {
    let localStorageValue = localStorage.getItem(MAIN_KEY) || {}
    if (typeof localStorageValue === 'string') {
        localStorageValue = JSON.parse(localStorageValue)
    }

    return localStorageValue
}
