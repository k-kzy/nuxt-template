import { mount } from '@vue/test-utils'
import Balloon from '@/src/components/atoms/Balloon/Default.vue'

describe('Testing Balloon Component', (): void => {
  test('Display text', (): void => {
    const props = {
      text: '削除する',
    }
    const wrapper = mount(Balloon, {
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('text')).toBe(props.text)
  })
})
