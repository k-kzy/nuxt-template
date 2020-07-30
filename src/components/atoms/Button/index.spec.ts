import { mount } from '@vue/test-utils'
import Button from '@/src/components/atoms/Button/index.vue'

describe('Button', (): void => {
  test('Display text', (): void => {
    const props = {
      text: '検索する',
    }
    const wrapper = mount(Button, {
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('text')).toBe(props.text)
  })
})
