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

<style lang="scss" scoped></style>
