import { shallowMount, createLocalVue } from '@vue/test-utils'

import PImageUpload from './PImageUpload'

const localVue = createLocalVue()

describe('PImageUpload component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PImageUpload, {
      localVue
    })
  })

  it('should match the snapshot', () =>
    expect(wrapper.html()).toMatchSnapshot())

  it('should have an input[file]', () => {
    expect(wrapper.find('input[type="file"]').exists()).toBe(true)
  })

  it.only('should generate preview when a file is uploaded', async () => {
    const mockedFile = [
      {
        name: 'image.png',
        size: 50000,
        type: 'image/png'
      }
    ]

    const readAsDataURLSpy = jest
      .spyOn(FileReader.prototype, 'readAsDataURL')
      .mockImplementation(function() {
        this.onload({ target: { result: 'foo' } })
      })

    const input = wrapper.find('input[type="file"]')
    wrapper.vm.handleUpload({ target: { files: mockedFile } })
    await input.trigger('change')

    expect(wrapper.emitted().upload).toBeTruthy()
    await wrapper.setProps({ image: wrapper.emitted().upload[0][0] })

    const preview = wrapper.find('img')
    expect(readAsDataURLSpy).toHaveBeenCalled()
    expect(preview.exists()).toBe(true)
  })
})
