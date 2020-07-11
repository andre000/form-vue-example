import { mount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Vuex from 'vuex'

import POrderForm from './POrderForm'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockedOrder = {
  name: 'Suco de Goiaba',
  flavour: 'Goiaba',
  price: 5,
  description: 'Um mero suco de goiaba. Tem sachet de açúcar no balcão...',
  image: { preview: 'image' }
}

jest.useFakeTimers()
async function flush() {
  await flushPromises()
  jest.runAllTimers()
}

describe('POrderForm component', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(POrderForm, {
      localVue,
      store,
      sync: false
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have a form element', () => {
    expect(wrapper.find('.form').exists()).toBe(true)
  })

  it('should have a disabled submit button', async () => {
    await flush()
    expect(wrapper.find('button[type=submit]:disabled').exists()).toBe(true)
  })

  it('should submit successfully when filled', () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder })
    })

    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      false
    )
  })

  it('should show an error when name field is empty', async () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder, name: '' })
    })

    await wrapperWithValue.vm.$refs['form-validator'].validate()
    await flush()

    expect(
      wrapperWithValue.find('input ~ .field__message--error').text()
    ).toMatch(`O campo 'Título do Pedido' é obrigatório`)
    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      true
    )
  })

  it('should show an error when name field has less than 3 characters', async () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder, name: 'f' })
    })

    await wrapperWithValue.vm.$refs['form-validator'].validate()
    await flush()

    expect(
      wrapperWithValue.find('input ~ .field__message--error').text()
    ).toMatch(`O campo 'Título do Pedido' deve conter pelo menos 3 caracteres`)
    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      true
    )
  })

  it('should show an error when flavour field is empty', async () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder, flavour: '' })
    })

    await wrapperWithValue.vm.$refs['form-validator'].validate()
    await flush()

    expect(
      wrapperWithValue.find('input ~ .field__message--error').text()
    ).toMatch(`O campo 'Sabor' é obrigatório`)
    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      true
    )
  })

  it('should show an error when flavour field has less than 3 characters', async () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder, flavour: 'f' })
    })

    await wrapperWithValue.vm.$refs['form-validator'].validate()
    await flush()

    expect(
      wrapperWithValue.find('input ~ .field__message--error').text()
    ).toMatch(`O campo 'Sabor' deve conter pelo menos 3 caracteres`)
    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      true
    )
  })

  it('should show an error when price field is equal to zero', async () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder, price: 0 })
    })

    await wrapperWithValue.vm.$refs['form-validator'].validate()
    await flush()

    expect(
      wrapperWithValue.find('input ~ .field__message--error').text()
    ).toMatch(`O campo 'Preço' precisa ser 0.01 ou maior`)
    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      true
    )
  })

  it('should reset all values when form is reseted', async () => {
    const wrapperWithValue = mount(POrderForm, {
      localVue,
      store,
      sync: false,
      data: () => ({ ...mockedOrder })
    })

    await wrapperWithValue.find('form').element.reset()

    await wrapperWithValue.vm.$refs['form-validator'].validate()
    await flush()

    expect(wrapperWithValue.find('button[type=submit]:disabled').exists()).toBe(
      true
    )
    expect(wrapperWithValue.vm.$data).toEqual(wrapper.vm.$data)
  })
})
