import { shallowMount, createLocalVue } from '@vue/test-utils'

import POrderList from './POrderList'

const localVue = createLocalVue()

const mockedOrders = [
  {
    name: 'Suco de Goiaba',
    flavour: 'Goiaba',
    price: 5,
    description: 'Um mero suco de goiaba. Tem sachet de açúcar no balcão...',
    image: { preview: 'image' },
    type: 'drinks'
  }
]

describe('POrderList component', () => {
  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(POrderList, {
      localVue
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have an element with .order-list class', async () => {
    expect(wrapper.find('.order-list').exists()).toBe(true)
  })

  it('should render "POrderList" component when order prop is received', async () => {
    await wrapper.setProps({ orders: mockedOrders })
    expect(wrapper.findComponent({ name: 'POrderItem' }).exists()).toBe(true)
  })
})
