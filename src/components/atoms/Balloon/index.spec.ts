import { mount } from '@vue/test-utils'
import Balloon from '@/src/components/atoms/Balloon/Default.vue'

describe('Balloon Component', (): void => {
  test('バルーン内のテキスト挿入が正常化かテスト', (): void => {
    const text = '削除する'
    const wrapper = mount(Balloon, {
      propsData: { text },
    })
    expect(wrapper.text()).toMatch(text)
  })
})
