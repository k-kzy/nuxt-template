import { mount } from '@vue/test-utils'
import Heading from '@/src/components/atoms/Heading/Default.vue'

describe('Heading Component', (): void => {
  test('見出しレベルのpropが正常に受け取れているかテスト', (): void => {
    const props = {
      headingLevel: 'h2',
    }
    const wrapper = mount(Heading, {
      propsData: props,
    })
    expect(wrapper.props('headingLevel')).toBe(props.headingLevel)
  })
})
