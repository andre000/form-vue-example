<template>
  <section class="home">
    <p-order-form class="home__form" />
    <p-order-list class="home__list" :orders="filteredOrders" />
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

<style lang="scss" scoped>
.home {
  margin-top: -80px;
  .home__list {
    margin: 10rem 0px;
  }
}
</style>
