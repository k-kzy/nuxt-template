import StoryComponent from './index.vue'

export default {
  title: 'atoms/Title',
  parameters: {
    notes: '見出し用',
    info: {
      text: `
    description or documentation about my component, supports markdown

    ~~~ts
    <Button>Click Here</Button>
    ~~~
  `,
    },
  },
}

export const normal = () => ({
  components: { StoryComponent },
  template: `<story-component>test</story-component>`,
})

export const test = () => ({
  components: { StoryComponent },
  template: `<story-component>test</story-component>`,
})
