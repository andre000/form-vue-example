<template>
  <div class="text" :class="errorMessage && 'text--error'">
    <textarea v-on="$listeners" v-bind="$attrs"></textarea>
    <div v-if="errorMessage" class="text__message text__message--error">
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

<style></style>
