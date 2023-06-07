<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  }
})

const svgClass = computed(() => {
  return props.iconClass ? `svg-icon ${props.iconClass}` : 'svg-icon'
})

const href = computed(() => `#${props.name}`)

</script>

<template>
  <svg :class="svgClass">
    <use :href="href" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
