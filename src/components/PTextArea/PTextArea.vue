<template>
  <div class="field" :class="errorMessage && 'field--error'">
    <textarea :value="value" v-on="listeners" v-bind="$attrs"></textarea>
    <div v-if="errorMessage" class="field__message field__message--error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'PInput',
  props: {
    value: {
      type: [String, Number]
    },

    errorMessage: {
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

<style scoped>
textarea {
  resize: none;
}
</style>
