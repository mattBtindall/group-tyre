export function mapRange(input, oldMin, oldMax, newMin, newMax) {
    return ((input - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin
}
