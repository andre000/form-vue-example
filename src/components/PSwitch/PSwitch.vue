<template>
  <label for="toggle-button" class="switch">
    <span :class="value === firstOption.value && 'selected'">{{
      firstOption.label
    }}</span>
    <input
      ref="toggle-button"
      type="checkbox"
      id="toggle-button"
      v-on="listeners"
      v-bind="$attrs"
      v-model="currentState"
      style="display: none"
    />

    <span class="switch__bar">
      <i class="switch__button" :class="buttonPosition"> </i>
    </span>
    <span :class="value === secondOption.value && 'selected'">{{
      secondOption.label
    }}</span>
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

  mounted() {
    if (this.value === this.secondOption.value) {
      this.currentState = true
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    },

    buttonPosition() {
      return this.value === this.firstOption.value ? 'left' : 'right'
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

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.switch {
  font: 400 16px/21px Roboto;
  color: $primary-text;
  cursor: pointer;

  .selected {
    font-weight: bold;
  }

  .switch__bar {
    margin: 0px 5px;
    background: #fff;
    width: 42px;
    height: 12px;
    display: inline-block;
    position: relative;
    border-radius: 11px;

    .switch__button {
      background: #e33535 0% 0% no-repeat padding-box;
      width: 20px;
      height: 20px;
      display: inline-block;
      position: absolute;
      border-radius: 100%;
      bottom: -4px;
      transition: transform 0.2s ease-in-out;

      &.left {
        transform: translateX(0px);
      }
      &.right {
        transform: translateX(calc(100% + 2px));
      }
    }
  }
}
</style>
