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
      template: `<Balloon text="次へ"></Balloon>`,
    }),
    {
      info: {},
      notes: '2文字ラベル バルーン',
    }
  )

  .add(
    '4文字ラベル',
    () => ({
      components: { Balloon },
      props: {
        text: {
          default: text('Text', '削除する'),
        },
      },
      template: `<Balloon text="削除する"></Balloon>`,
    }),
    {
      info: {},
      notes: '4文字ラベル バルーン',
    }
  )

  .add(
    '絶対座標配置',
    () => ({
      components: { Balloon },
      props: {
        text: {
          default: text('Text', '左上から 200px に配置'),
        },
      },
      template: `<Balloon text="左上から 200px に配置" :style="{position: 'absolute', top: '10px', left: '200px'}"></Balloon>`,
    }),

    {
      info: {},
      notes: '絶対座標配置 バルーン',
    }
  )
