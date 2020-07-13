import { withKnobs, text, number } from '@storybook/addon-knobs'
import POrderItem from './POrderItem.vue'
import image from '@/components/PImageUpload/__mocks__/image'

export default {
  component: POrderItem,
  title: 'POrderItem',
  decorator: [withKnobs]
}

export const withInitialState = () => ({
  components: { POrderItem },
  props: {
    order: {
      default: {
        name: text('Name', 'Suco de Goiaba'),
        flavour: text('Flavour', 'Goiaba'),
        price: number('Price', '5'),
        description: text(
          'Description',
          'Um mero suco de goiaba. Tem sachet de açúcar no balcão...'
        ),
        image: {
          preview: image
        },
        type: 'drinks'
      }
    }
  },
  template: `<div style="position: relative"><p-order-item :order="order" /></div>`
})
