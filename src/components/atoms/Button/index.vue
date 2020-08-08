<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop() public text!: string
}
</script>

<style lang="scss" scoped>
.button {
  color: #000;
  font-size: 40px;
}
</style>
