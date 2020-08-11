import { storiesOf } from '@storybook/vue'
import Heading from './Default.vue'

storiesOf('atoms/Heading', module)
  .add(
    '見出し1',
    () => ({
      components: { Heading },
      template: `
      <Heading headingLevel="h1">見出し1</Heading>
    `,
    }),
    {
      info: {},
      notes: '見出し1',
    }
  )

  .add(
    '見出し2',
    () => ({
      components: { Heading },
      template: `
      <Heading headingLevel="h2">見出し2</Heading>
    `,
    }),
    {
      info: {},
      notes: '見出し2',
    }
  )

  .add(
    '見出し3',
    () => ({
      components: { Heading },
      template: `
      <Heading headingLevel="h3">見出し3</Heading>
    `,
    }),
    {
      info: {},
      notes: '見出し3',
    }
  )

  .add(
    '見出し4',
    () => ({
      components: { Heading },
      template: `
      <Heading headingLevel="h4">見出し4</Heading>
    `,
    }),
    {
      info: {},
      notes: '見出し4',
    }
  )

  .add(
    '見出し5',
    () => ({
      components: { Heading },
      template: `
      <Heading headingLevel="h5">見出し5</Heading>
    `,
    }),
    {
      info: {},
      notes: '見出し5',
    }
  )

  .add(
    '見出し6',
    () => ({
      components: { Heading },
      template: `
      <Heading headingLevel="h6">見出し6</Heading>
    `,
    }),
    {
      info: {},
      notes: '見出し6',
    }
  )
