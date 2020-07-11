import { shallowMount, createLocalVue } from '@vue/test-utils'

import PSwitch from './PSwitch'

const localVue = createLocalVue()

const mockedSwitch = {
  value: 0,
  firstOption: { label: 'Foo', value: 0 },
  secondOption: { label: 'Bar', value: 1 }
}

describe('PSwitch component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(PSwitch, {
      localVue,
      propsData: { ...mockedSwitch }
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have both options label', () => {
    expect(wrapper.find('span:first-child').text()).toMatch(
      mockedSwitch.firstOption.label
    )
    expect(wrapper.find('span:last-child').text()).toMatch(
      mockedSwitch.secondOption.label
    )
  })

  it('should have a hidden checkbox input', () => {
    const input = wrapper.find('input[type="checkbox"]')
    expect(input.exists()).toBe(true)
    expect(global.getComputedStyle(input.element).display).toBe('none')
  })

  it('should change values when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.vm.currentState).toBe(true)
    expect(wrapper.emitted().input[0][0]).toBe(mockedSwitch.secondOption.value)
  })

  it('should change switch state with initial value prop', async () => {
    const wrapperNewValue = shallowMount(PSwitch, {
      localVue,
      propsData: { ...mockedSwitch, value: 1 }
    })
    expect(wrapperNewValue.vm.currentState).toBe(true)
  })
})
