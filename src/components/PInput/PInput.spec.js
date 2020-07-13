import { shallowMount, createLocalVue } from '@vue/test-utils'

import PInput from './PInput'
import { Money } from 'v-money'

const localVue = createLocalVue()

describe('PInput component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(PInput, {
      localVue
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have an input element', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('should display an error when the "errorMessage" prop has value', async () => {
    await wrapper.setProps({ errorMessage: 'This is an error' })
    expect(wrapper.find('.field__message--error').exists()).toBe(true)
  })

  it('should add "field--error" class to the component when an error is displayed', async () => {
    await wrapper.setProps({ errorMessage: 'This is an error' })
    expect(wrapper.classes('field--error')).toBe(true)
  })

  it('should render "v-money" component when "is-money" is true', async () => {
    await wrapper.setProps({ isMoney: true })
    expect(wrapper.findComponent(Money).exists()).toBe(true)
  })
})
