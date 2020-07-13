import '@/assets/scss/storybook.scss'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import PInput from './PInput.vue'

export default {
  component: PInput,
  title: 'PInput',
  decorator: [withKnobs]
}

export const withInitialState = () => ({
  components: { PInput },
  template: '<p-input />'
})

export const withErrorMessage = () => ({
  components: { PInput },
  props: {
    text: {
      default: text('Error', 'This is an error')
    }
  },
  template: '<p-input :errorMessage="text" />'
})

export const withMoneyMask = () => ({
  components: { PInput },
  props: {
    money: {
      default: boolean('Money mask', true)
    }
  },
  template: '<p-input :is-money="money" />'
})
