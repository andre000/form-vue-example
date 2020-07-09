<template>
  <ul class="order-list">
    <p-order-item v-for="(order, i) in orders" :key="i" :order="order" />
  </ul>
</template>

<script>
import { POrderItem } from '@/components/POrderItem'

export default {
  name: 'POrderList',
  components: {
    POrderItem
  },

  props: {
    orders: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
