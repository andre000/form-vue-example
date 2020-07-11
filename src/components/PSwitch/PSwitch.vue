<template>
  <label for="toggle-button">
    <span>{{ firstOption.label }}</span>
    <input
      ref="toggle-button"
      type="checkbox"
      id="toggle-button"
      v-on="listeners"
      v-bind="$attrs"
      v-model="currentState"
      style="display: none"
    />
    <i v-if="value === firstOption.value"> ⬅ </i>
    <i v-if="value === secondOption.value"> ➡ </i>
    <span>{{ secondOption.label }}</span>
  </label>
</template>

<script>
const optionValidator = option =>
  Object.keys(option).every(op => ['label', 'value'].includes(op)) &&
  Object.keys(option).length === 2

export default {
  name: 'PSwitch',
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
