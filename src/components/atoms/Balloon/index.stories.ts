import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import Balloon from './Default.vue'

storiesOf('atoms/Balloon', module)
  .add(
    '2文字ラベル',
    () => ({
      components: { Balloon },
      props: {
        text: {
          default: text('Text', '次へ'),
        },
      },
      template: `<Balloon>{{ text }}</Balloon>`,
    }),
    {
      info: {},
      notes: '2文字ラベル バルーン',
    }
  )

  .add('4文字ラベル', () => ({
    components: { Balloon },
    props: {
      text: {
        default: text('Text', '削除する'),
      },
    },
    template: `<Balloon>{{ text }}</Balloon>`,
  }))

  .add('絶対座標配置', () => ({
    components: { Balloon },
    props: {
      text: {
        default: text('Text', '左上から 200px に配置'),
      },
    },
    template: `<Balloon>{{ text }}</Balloon>`,
  }))
