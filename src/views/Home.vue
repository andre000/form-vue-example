<template>
  <section class="home">
    <p-form />
    <p-order-list :orders="filteredOrders" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import { PForm } from '@/components/PForm'
import { POrderList } from '@/components/POrderList'

export default {
  name: 'Home',
  components: {
    PForm,
    POrderList
  },

  computed: {
    ...mapGetters(['filteredOrders'])
  }
}
</script>
