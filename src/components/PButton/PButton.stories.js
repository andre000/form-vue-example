import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import PButton from './PButton.vue'

export default {
  component: PButton,
  title: 'PButton',
  decorator: [withKnobs]
}

export const withText = () => ({
  components: { PButton },
  props: {
    text: {
      default: text('Text', 'Default Button')
    }
  },
  template: '<p-button @click="action">{{ text }}</p-button>',
  methods: { action: action('clicked') }
})

export const withPrimaryColor = () => ({
  components: { PButton },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    }
  },
  template:
    '<p-button @click="action" :disabled="disabled" color="primary">Button</p-button>',
  methods: { action: action('clicked') }
})

export const withSecondaryColor = () => ({
  components: { PButton },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    }
  },
  template:
    '<p-button @click="action" :disabled="disabled" color="secondary">Button</p-button>',
  methods: { action: action('clicked') }
})
