import Button from './index.vue'

export default {
  title: 'atoms/Button',
  parameters: {
    notes: 'ボタン',
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
  components: { Button },
  template: `<Button text="ボタン"></Button>`,
})
