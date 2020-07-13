import '@/assets/scss/field.scss'
import PInput from './PInput.vue'
export default {
  component: PInput,
  title: 'PInput'
}

export const withInitialState = () => ({
  components: { PInput },
  template: '<p-input />'
})

export const withErrorMessage = () => ({
  components: { PInput },
  template: '<p-input errorMessage="This is an error" />'
})

export const withMoneyMask = () => ({
  components: { PInput },
  template: '<p-input is-money />'
})
