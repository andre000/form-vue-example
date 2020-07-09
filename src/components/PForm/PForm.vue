<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__switch">
      <p-switch
        :first-option="{ label: 'Comida', value: 'food' }"
        :second-option="{ label: 'Bebida', value: 'drinks' }"
        @input="handleOrderType"
        :value="orderType"
      />
    </div>

    <div class="form__line">
      <p-input v-model="name" placeholder="Titulo do Pedido" />
      <p-input v-model="flavour" placeholder="Sabor" />
      <p-input v-model="price" placeholder="R$" type="number" />
    </div>

    <div class="form__line">
      <p-text-area v-model="description" />
    </div>

    <div class="form__line">
      <p-image-upload :image="image" @upload="file => (image = file)" />
    </div>

    <div class="form__actions">
      <p-button @click="cleanForm">Limpar</p-button>
      <p-button type="submit">Cadastrar</p-button>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import { PInput } from '@/components/PInput'
import { PTextArea } from '@/components/PTextArea'
import { PImageUpload } from '@/components/PImageUpload'
import { PButton } from '@/components/PButton'
import { PSwitch } from '@/components/PSwitch'

export default {
  name: 'PForm',
  components: {
    PInput,
    PTextArea,
    PImageUpload,
    PButton,
    PSwitch
  },

  data: () => ({
    name: '',
    flavour: '',
    price: '',
    description: '',
    image: null
  }),

  computed: {
    ...mapState(['orderType'])
  },

  methods: {
    handleSubmit() {
      this.ADD_ORDER({ ...this.$data })
      this.cleanForm()
    },
    handleOrderType(event) {
      this.CHANGE_ORDER_TYPE(event)
    },
    cleanForm() {
      this.name = ''
      this.flavour = ''
      this.price = ''
      this.description = ''
      this.image = null
    },
    ...mapMutations(['ADD_ORDER', 'CHANGE_ORDER_TYPE'])
  }
}
</script>

<style></style>
