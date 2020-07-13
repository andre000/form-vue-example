import { shallowMount, createLocalVue } from '@vue/test-utils'

import PTextArea from './PTextArea'

const localVue = createLocalVue()

describe('PTextArea component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(PTextArea, {
      localVue
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have an textarea element', () => {
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('should display an error when the "errorMessage" prop has value', async () => {
    await wrapper.setProps({ errorMessage: 'This is an error' })
    expect(wrapper.find('.field__message--error').exists()).toBe(true)
  })

  it('should add "text--error" class to the component when an error is displayed', async () => {
    await wrapper.setProps({ errorMessage: 'This is an error' })
    expect(wrapper.classes('field--error')).toBe(true)
  })
})
