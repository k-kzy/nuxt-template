import { storiesOf } from '@storybook/vue'
import Heading from './index.vue'

const propsDescription = {
  Heading: {
    headingLevel: '見出しの表示',
  },
}

storiesOf('atoms/Heading', module)
  .add(
    '見出し1',
    () => ({
      components: { Heading },
      template: '<Heading headingLevel="h1">見出し1</Heading>',
      propsDescription,
    }),
    { info: true }
  )
  .add(
    '見出し2',
    () => ({
      components: { Heading },
      template: '<Heading headingLevel="h2">見出し2</Heading>',
      propsDescription,
    }),
    { info: true }
  )
  .add(
    '見出し3',
    () => ({
      components: { Heading },
      template: '<Heading headingLevel="h3">見出し3</Heading>',
      propsDescription,
    }),
    { info: true }
  )
  .add(
    '見出し4',
    () => ({
      components: { Heading },
      template: '<Heading headingLevel="h4">見出し4</Heading>',
      propsDescription,
    }),
    { info: true }
  )
  .add(
    '見出し5',
    () => ({
      components: { Heading },
      template: '<Heading headingLevel="h5">見出し5</Heading>',
      propsDescription,
    }),
    {
      info: true,
    }
  )
  .add(
    '見出し6',
    () => ({
      components: { Heading },
      template: '<Heading headingLevel="h6">見出し6</Heading>',
      propsDescription,
    }),
    { info: true }
  )
