<template>
  <div class="field" :class="errorMessage && 'field--error'">
    <input v-if="!isMoney" :value="value" v-on="listeners" v-bind="$attrs" />
    <money
      v-else
      :value="value"
      v-bind="moneyMask"
      v-on="listeners"
      @blur.native="$emit('blur')"
    />
    <div v-if="errorMessage" class="field__message field__message--error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'

export default {
  inheritAttrs: false,
  name: 'PInput',
  components: {
    Money
  },
  props: {
    value: {
      type: [String, Number]
    },

    errorMessage: {
      type: String,
      default: null
    },

    isMoney: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    },

    moneyMask() {
      return {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2
      }
    }
  },

  methods: {
    updateValue(e) {
      this.$emit('input', this.isMoney ? e : e.target.value)
    }
  }
}
</script>
