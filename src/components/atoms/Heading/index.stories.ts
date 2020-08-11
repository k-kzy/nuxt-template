import { storiesOf } from '@storybook/vue'
import Heading from './Default.vue'

storiesOf('atoms/Heading', module).add(
  '見出し',
  () => ({
    components: { Heading },
    template: `
      <Heading headingLevel="h1">見出し1</Heading>
    `,
  }),
  {
    info: {},
    notes: '見出し',
  }
)
