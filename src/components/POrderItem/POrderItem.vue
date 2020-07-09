<template>
  <li class="order-item">
    <div class="order-item__image">
      <img :src="orderImage" alt="" srcset="" />
    </div>
    <div class="order-item__header">
      <div class="order-item__name">{{ order.name }}</div>
      <div class="order-item__price">{{ order.price }}</div>
    </div>
    <div class="order-item__body">
      <div>
        <span class="order-item__subtitle">Sabor: </span> {{ order.flavour }}
      </div>
      <div>
        <span class="order-item__subtitle">Descrição: </span>
        {{ order.description }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'POrderItem',
  props: {
    order: {
      type: Object,
      required: true,
      validator: order =>
        Object.keys(order).every(o =>
          // eslint-disable-next-line prettier/prettier
          ['name', 'flavour', 'price', 'description', 'image', 'type'].includes(o)
        ) && Object.keys(order).length === 6
    }
  },

  computed: {
    orderImage() {
      return this.order.image?.preview || ''
    }
  }
}
</script>

<style></style>
