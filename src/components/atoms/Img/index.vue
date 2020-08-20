<template>
  <img :src="fileSrc" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Img extends Vue {
  @Prop() public fileSrc!: string
}
</script>
