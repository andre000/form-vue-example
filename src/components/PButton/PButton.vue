<template>
  <button class="button" :class="`button--${color}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    color: {
      type: String,
      default: 'default',
      validator: v => ['default', 'primary', 'secondary'].includes(v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.button {
  width: 200px;
  height: 60px;
  border-radius: 30px;
  outline: none;
  border: none;
  font: 900 20px/26px Roboto;
  text-transform: uppercase;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: drop-shadow(2px 4px 6px $shadow-color);
  }
  &:disabled {
    filter: contrast(0.5) grayscale(0.6);
    cursor: not-allowed;
  }

  &.button--default {
    background: #eee;
  }

  &.button--primary {
    background: $primary;
    color: #fff;
  }

  &.button--secondary {
    background: $secondary;
    color: $primary-text;
  }
}
</style>
