import { action } from '@storybook/addon-actions'
import PButton from './PButton.vue'

export default {
  component: PButton,
  title: 'PButton'
}

export const withText = () => ({
  components: { PButton },
  template: '<p-button @click="action">Hello Button</p-button>',
  methods: { action: action('clicked') }
})

export const withPrimaryColor = () => ({
  components: { PButton },
  template: '<p-button @click="action" color="primary">Hello Button</p-button>',
  methods: { action: action('clicked') }
})

export const withSecondaryColor = () => ({
  components: { PButton },
  template:
    '<p-button @click="action" color="secondary">Hello Button</p-button>',
  methods: { action: action('clicked') }
})
