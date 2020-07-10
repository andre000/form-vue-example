import { shallowMount, createLocalVue } from '@vue/test-utils'

import POrderItem from './POrderItem'

const localVue = createLocalVue()

const mockedOrder = {
  name: 'Suco de Goiaba',
  flavour: 'Goiaba',
  price: 5,
  description: 'Um mero suco de goiaba. Tem sachet de açúcar no balcão...',
  image: { preview: 'image' },
  type: 'drinks'
}

describe('POrderItem component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(POrderItem, {
      localVue,
      propsData: { order: mockedOrder }
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have an image element with the thumbnail of the order', () => {
    const thumb = wrapper.find('.order-item__image img')
    expect(thumb.exists()).toBe(true)
    expect(thumb.element.src).toMatch(mockedOrder.image.preview)
  })

  it('should show the order name and price', () => {
    const nameEl = wrapper.find('.order-item__name')
    const priceEl = wrapper.find('.order-item__price')

    expect(nameEl.exists()).toBe(true)
    expect(priceEl.exists()).toBe(true)

    expect(nameEl.text()).toBe(mockedOrder.name)
    expect(priceEl.text()).toBe(`${mockedOrder.price}`)
  })

  it('should show the order flavour and price', () => {
    const bodyEl = wrapper.find('.order-item__body')

    expect(bodyEl.exists()).toBe(true)

    expect(bodyEl.text()).toMatch(mockedOrder.flavour)
    expect(bodyEl.text()).toMatch(mockedOrder.description)
  })
})
