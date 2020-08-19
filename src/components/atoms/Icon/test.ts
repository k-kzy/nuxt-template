import { mount } from '@vue/test-utils'
import TrashCanIcon from './TrashCanIcon.vue'

describe('Img Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TrashCanIcon)
    expect(wrapper.isVueInstance).toBeTruthy()
  })
})
