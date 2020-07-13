<template>
  <validation-observer ref="form-validator" v-slot="{ invalid }">
    <form
      class="form"
      @submit.prevent="handleSubmit"
      @reset.prevent="handleReset"
    >
      <img
        src="@/assets/img/pasteis-img.png"
        class="form__pasteis hide-md hide-sm hide-xs"
      />
      <div class="form__header">
        <span class="form__title">
          Monte aqui o seu cardápio. <br class="hide-xl" />
          <span class="hide-xs">O que está esperando?</span>
        </span>
        <div class="form__switch">
          <p-switch
            :first-option="{ label: 'Comida', value: 'food' }"
            :second-option="{ label: 'Bebida', value: 'drinks' }"
            @input="handleOrderType"
            :value="orderType"
          />
        </div>
      </div>

      <div class="form__body">
        <div class="form__row">
          <validation-provider
            :slim="true"
            :rules="{ required: true, min: 3, max: 60 }"
            v-slot="{ errors }"
            name="'Título do Pedido'"
          >
            <p-input
              class="w-40"
              v-model="name"
              placeholder="Título do Pedido"
              :errorMessage="errors[0]"
            />
          </validation-provider>

          <validation-provider
            :slim="true"
            :rules="{ required: true, min: 3, max: 60 }"
            v-slot="{ errors }"
            name="'Sabor'"
          >
            <p-input
              class="w-40"
              v-model="flavour"
              placeholder="Sabor"
              :errorMessage="errors[0]"
            />
          </validation-provider>

          <validation-provider
            class="w-20"
            :slim="true"
            :rules="{ required: true, min_value: 0.01 }"
            v-slot="{ errors }"
            name="'Preço'"
            ref="price-validator"
          >
            <p-input
              v-model="price"
              @input="handlePriceValidation"
              placeholder="R$"
              is-money
              :errorMessage="!isEmptyForm ? errors[0] : ''"
            />
          </validation-provider>
        </div>

        <div class="form__row">
          <p-text-area
            placeholder="Descrição"
            class="w-100"
            v-model="description"
          />
        </div>

        <div class="form__row">
          <p-image-upload :image="image" @upload="file => (image = file)" />
        </div>
      </div>

      <div class="form__footer">
        <div class="form__actions">
          <p-button color="primary" type="reset">Limpar</p-button>
          <p-button color="secondary" type="submit" :disabled="invalid"
            >Cadastrar</p-button
          >
        </div>
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
    isEmptyForm() {
      return Object.keys(this.$data).every(data => !this[data])
    },
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

<style lang="scss">
@import '@/assets/scss/variables.scss';

.form {
  width: 60vw;
  box-shadow: 0px 0px 30px $shadow-color;
  border-radius: 20px;
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;

  @media #{$screen-xs} {
    width: 80vw;
  }

  .form__pasteis {
    width: 393px;
    height: 316px;
    position: absolute;
    top: calc(-316px / 2);
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    right: 0;
  }

  .form__header {
    background: $secondary;
    padding: 25px 60px 40px 60px;
    position: relative;
    border-radius: 20px 20px 0px 0px;

    @media screen and (max-width: 768px) {
      text-align: center;
      padding: 25px 30px 40px 30px;
    }

    .form__title {
      color: $primary-text;
      font: Bold Italic 24px/29px Roboto;
    }

    .form__switch {
      color: $primary-text;
      position: absolute;
      right: 60px;
      top: 25px;

      @media screen and (max-width: 768px) {
        position: relative;
        right: 0px;
        top: 0px;
        margin-top: 12px;
      }
    }
  }

  .form__body {
    display: flex;
    flex-direction: column;
    padding: 0px 20px 50px 20px;
    margin-top: -20px;
    position: relative;

    .form__row {
      display: flex;
      margin-bottom: 20px;
      position: relative;

      @media #{$screen-xs} {
        &:first-child {
          flex-direction: column;
          .field {
            width: 100%;
            margin: 10px 0px !important;
          }
        }
      }

      .field:not(:first-child):not(:last-child):not(:only-child) {
        margin: 0px 10px;
      }
      .field:first-child {
        margin: 0px 10px 0px 0px;
      }
      .field:last-child {
        margin: 0px 0px 0px 10px;
      }
      .field:only-child {
        margin: 0px;
      }

      textarea {
        height: 80px;
      }

      .image-upload {
        width: 100%;
        height: calc(110px - 40px - 2px);
      }
    }
  }

  .form__footer {
    position: absolute;
    width: 100%;
    bottom: -30px;
    text-align: center;
    @media #{$screen-xs} {
      bottom: -100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .button {
      &:first-child {
        margin-right: 35px;
      }
      @media #{$screen-xs} {
        margin: 5px 0px !important;
      }
    }
  }
}
</style>
