<template>
  <span class="balloon">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Balloon extends Vue {}
</script>
