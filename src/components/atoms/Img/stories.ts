import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import Img from './index.vue'

storiesOf('atoms/Img', module).add(
  '画像',
  () => ({
    components: { Img },
    props: {
      fileSrc: {
        default: text('fileSrc', 'https://placehold.jp/150x150.png'),
      },
    },
    template: `<Img :src="fileSrc"></Img>`,
  }),
  {
    info: {},
    notes: '画像',
  }
)
