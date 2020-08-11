import { mount } from '@vue/test-utils'
import Img from '@/src/components/atoms/Img/Default.vue'

describe('Img Component', () => {
  test('画像のパス読み込みが正常化かテスト', () => {
    const props = {
      imageSrc: 'https://placehold.jp/150x150.png',
    }
    const wrapper = mount(Img, {
      propsData: props,
    })
    expect(wrapper.props('imageSrc')).toBe(props.imageSrc)
  })
})
