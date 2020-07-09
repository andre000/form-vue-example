<template>
  <label for="toggle_button">
    <span v-if="currentState">{{ firstOption.label }}</span>
    <span v-if="!currentState">{{ secondOption.label }}</span>

    <input
      type="checkbox"
      id="toggle_button"
      v-on="listeners"
      v-bind="$attrs"
      v-model="currentState"
    />
  </label>
</template>

<script>
const optionValidator = option =>
  Object.keys(option).every(op => ['label', 'value'].includes(op)) &&
  Object.keys(option).length === 2

export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    firstOption: {
      type: Object,
      required: true,
      validator: optionValidator
    },
    secondOption: {
      type: Object,
      required: true,
      validator: optionValidator
    }
  },

  data: () => ({
    currentState: false
  }),

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  },

  methods: {
    updateValue() {
      const value = this.currentState
        ? this.firstOption.value
        : this.secondOption.value
      this.$emit('input', value)
    }
  }
}
</script>

<style></style>
