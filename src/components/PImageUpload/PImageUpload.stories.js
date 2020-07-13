import '@/assets/scss/storybook.scss'
import { withKnobs } from '@storybook/addon-knobs'
import PImageUpload from './PImageUpload.vue'
import image from './__mocks__/image'

export default {
  component: PImageUpload,
  title: 'PImageUpload',
  decorator: [withKnobs]
}

export const withInitialState = () => ({
  components: { PImageUpload },
  template: '<p-image-upload />'
})

export const withPreview = () => ({
  components: { PImageUpload },
  props: {
    image: {
      default: image
    }
  },
  template: '<p-image-upload :image="{ preview: image }"/>'
})
