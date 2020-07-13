import '@/assets/scss/storybook.scss'
import PSwitch from './PSwitch.vue'

export default {
  component: PSwitch,
  title: 'PSwitch'
}

export const withInitialState = () => ({
  components: { PSwitch },
  props: {
    value: {
      default: 1
    }
  },
  template: `
    <div class="background">
      <p-switch v-model="value" :first-option="{ label: 'One', value: 1 }" :second-option="{ label: 'Two', value: 2 }"/>
    <div>
  `
})
