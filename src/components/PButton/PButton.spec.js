import { shallowMount, createLocalVue } from '@vue/test-utils'

import PButton from './PButton'

const localVue = createLocalVue()

describe('PButton component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PButton, {
      localVue
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have button class', () =>
    expect(wrapper.find('.button').exists()).toBe(true))

  it('should have button--default when the color prop is not defined', () => {
    expect(wrapper.find('.button--default').exists()).toBe(true)
  })

  it('should change class along with the color prop', async () => {
    await wrapper.setProps({ color: 'primary' })
    expect(wrapper.find('.button--primary').exists()).toBe(true)
    await wrapper.setProps({ color: 'secondary' })
    expect(wrapper.find('.button--secondary').exists()).toBe(true)
  })

  it('should throw an error when using a not valid color prop', async () => {
    expect(wrapper.vm.$options.props.color.validator('foo')).toBe(false)
  })
})
