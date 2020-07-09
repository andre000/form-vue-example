<template>
  <button class="button" :class="`button--${type}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: v => ['default', 'primary', 'secondary'].includes(v)
    }
  }
}
</script>

<style lang="scss" scoped></style>
