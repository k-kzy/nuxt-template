<template>
  <span class="balloon">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Balloon extends Vue {
  @Prop() public text!: string
}
</script>
