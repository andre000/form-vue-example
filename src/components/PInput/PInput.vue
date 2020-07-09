<template>
  <div class="field" :class="errorMessage && 'field--error'">
    <input v-on="$listeners" v-bind="$attrs" />
    <div v-if="errorMessage" class="field__message field__message--error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number]
    },

    errorMessage: {
      type: String,
      default: null
    },

    mask: {
      type: String,
      default: null
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },

  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style></style>
