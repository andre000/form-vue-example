<template>
  <section class="home">
    <p-order-form />
    <p-order-list :orders="filteredOrders" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import { POrderForm } from '@/components/POrderForm'
import { POrderList } from '@/components/POrderList'

export default {
  name: 'Home',
  components: {
    POrderForm,
    POrderList
  },

  computed: {
    ...mapGetters(['filteredOrders'])
  }
}
</script>
