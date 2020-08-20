import { storiesOf } from '@storybook/vue'
import TrashCanIcon from './TrashCanIcon.vue'

storiesOf('atoms/Icon', module).add(
  'ゴミ箱アイコン',
  () => ({
    components: { TrashCanIcon },
    template: `<TrashCanIcon></TrashCanIcon>`,
  }),
  { info: true }
)
