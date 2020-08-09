<template>
  <span class="balloon">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// interface PositionStyle {
//   position: string
//   top: string
//   left: string
// }

@Component
export default class Balloon extends Vue {}
</script>
