<template>
  <validation-observer ref="form-validator" v-slot="{ invalid }">
    <form
      class="form"
      @submit.prevent="handleSubmit"
      @reset.prevent="handleReset"
    >
      <div class="form__switch">
        <p-switch
          :first-option="{ label: 'Comida', value: 'food' }"
          :second-option="{ label: 'Bebida', value: 'drinks' }"
          @input="handleOrderType"
          :value="orderType"
        />
      </div>

      <div class="form__line">
        <validation-provider
          :rules="{ required: true, min: 3, max: 60 }"
          v-slot="{ errors }"
          name="'Título do Pedido'"
        >
          <p-input
            v-model="name"
            placeholder="Título do Pedido"
            :errorMessage="errors[0]"
          />
        </validation-provider>

        <validation-provider
          :rules="{ required: true, min: 3, max: 60 }"
          v-slot="{ errors }"
          name="'Sabor'"
        >
          <p-input
            v-model="flavour"
            placeholder="Sabor"
            :errorMessage="errors[0]"
          />
        </validation-provider>

        <validation-provider
          :rules="{ required: true, min_value: 0.01 }"
          v-slot="{ errors }"
          name="'Preço'"
          ref="price-validator"
        >
          <p-input
            v-model="price"
            @input="handlePriceValidation"
            @blur.native="console.log('a')"
            placeholder="R$"
            is-money
            :errorMessage="errors[0]"
          />
        </validation-provider>
      </div>

      <div class="form__line">
        <p-text-area v-model="description" />
      </div>

      <div class="form__line">
        <p-image-upload :image="image" @upload="file => (image = file)" />
      </div>

      <div class="form__actions">
        <p-button type="reset">Limpar</p-button>
        <p-button type="submit" :disabled="invalid">Cadastrar</p-button>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import { PInput } from '@/components/PInput'
import { PTextArea } from '@/components/PTextArea'
import { PImageUpload } from '@/components/PImageUpload'
import { PButton } from '@/components/PButton'
import { PSwitch } from '@/components/PSwitch'
import { ValidationProvider, ValidationObserver } from '@/plugins/vee-validate'

export default {
  name: 'PForm',
  components: {
    ValidationProvider,
    ValidationObserver,
    PInput,
    PTextArea,
    PImageUpload,
    PButton,
    PSwitch
  },

  data: () => ({
    name: '',
    flavour: '',
    price: 0,
    description: '',
    image: null
  }),

  computed: {
    ...mapState(['orderType'])
  },

  methods: {
    handleSubmit() {
      this.ADD_ORDER({ ...this.$data })
      this.handleReset()
    },
    handleOrderType(event) {
      this.CHANGE_ORDER_TYPE(event)
    },
    handleReset() {
      this.name = ''
      this.flavour = ''
      this.price = 0
      this.description = ''
      this.image = null

      this.$refs['form-validator'].reset()
    },

    handlePriceValidation() {
      this.$refs['price-validator']?.validate()
    },

    ...mapMutations(['ADD_ORDER', 'CHANGE_ORDER_TYPE'])
  }
}
</script>

<style></style>
