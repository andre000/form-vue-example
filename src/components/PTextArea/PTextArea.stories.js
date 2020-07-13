import '@/assets/scss/storybook.scss'
import { withKnobs, text } from '@storybook/addon-knobs'
import PTextArea from './PTextArea.vue'

export default {
  component: PTextArea,
  title: 'PTextArea',
  decorator: [withKnobs]
}

export const withInitialState = () => ({
  components: { PTextArea },
  template: '<p-text-area />'
})

export const withErrorMessage = () => ({
  components: { PTextArea },
  props: {
    text: {
      default: text('Error', 'This is an error')
    }
  },
  template: '<p-text-area :errorMessage="text" />'
})
