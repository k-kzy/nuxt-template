<template>
  <div class="container">
    <div>
      <h1 class="title">
        calendar
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <Balloon text="削除する" />
    <Img :src="filePath" />
    <TrashCanIcon />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Balloon from '../components/atoms/Balloon/index.vue'
import Heading from '../components/atoms/Heading/index.vue'
import Img from '../components/atoms/Img/index.vue'
import TrashCanIcon from '../components/atoms/Icon/TrashCanIcon.vue'

@Component({
  components: {
    Balloon,
    Heading,
    Img,
    TrashCanIcon,
  },
})
export default class Index extends Vue {
  public filePath: string = 'https://placehold.jp/150x150.png'
}
</script>

<style lang="scss">
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  color: #35495e;
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
