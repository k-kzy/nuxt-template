<template>
  <div class="heading">
    <h1 v-if="headingLevel === 'h1'" class="h h1">
      <slot />
    </h1>
    <h2 v-if="headingLevel === 'h2'" class="h h2">
      <slot />
    </h2>
    <h3 v-if="headingLevel === 'h3'" class="h h3">
      <slot />
    </h3>
    <h4 v-if="headingLevel === 'h4'" class="h h4">
      <slot />
    </h4>
    <h5 v-if="headingLevel === 'h5'" class="h h5">
      <slot />
    </h5>
    <h6 v-if="headingLevel === 'h6'" class="h h6">
      <slot />
    </h6>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Balloon extends Vue {
  @Prop() public headingLevel!: string
}
</script>
