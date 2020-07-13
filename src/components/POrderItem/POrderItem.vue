<template>
  <li class="order-item">
    <div class="order-item__image">
      <img loading="lazy" :src="orderImage" alt="" srcset="" />
    </div>
    <div class="order-item__header">
      <div class="order-item__name">"{{ order.name }}"</div>
      <div class="order-item__price">R$ {{ order.price | money }}</div>
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
      return (
        this.order.image?.preview || require('@/assets/img/pasteis-img.png')
      )
    }
  },

  filters: {
    money(v) {
      return Number(v).toLocaleString('pt-br', {
        mode: 'currency',
        currency: 'BRL'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.order-item {
  box-shadow: 0px 0px 30px $shadow-color;
  border-radius: 20px;
  background: #fff;
  margin-left: 120px;
  list-style: none;
  position: relative;

  @media #{$screen-sm-xs} {
    margin-left: 0px;
  }

  @media #{$screen-xs} {
    width: 80vw;
    &:first-child {
      margin-top: 200px;
    }
  }

  &:not(:first-child) {
    margin-top: 50px;
    @media #{$screen-sm-xs} {
      margin-top: 100px;
    }
  }

  .order-item__header {
    position: relative;
    background: $primary;
    border-radius: 20px 20px 0px 0px;
    padding: 20px 40px 20px 110px;
    display: flex;
    justify-content: space-between;

    @media #{$screen-sm-xs} {
      padding: 20px 40px;
      text-align: center;
      flex-direction: column;
    }

    .order-item__name {
      color: $secondary;
      font: 700 Italic 30px/37px Roboto;
    }
    .order-item__price {
      color: #fff;
      font: 700 Italic 26px/32px Roboto;
    }
  }

  .order-item__body {
    position: relative;
    padding: 36px 0px 36px 110px;
    color: $primary-text;
    font: 400 24px/32px Roboto;

    @media #{$screen-sm-xs} {
      padding: 36px 40px;
    }

    .order-item__subtitle {
      font-weight: bold;
      font-style: italic;
      margin-right: 10px;

      @media #{$screen-sm-xs} {
        display: block;
      }
    }
  }

  .order-item__image {
    position: absolute;
    box-shadow: 0px 0px 30px $shadow-color;
    border-radius: 20px;
    z-index: 10;
    background: #fff;
    left: -90px;
    margin-top: 21px;
    width: 180px;
    height: 180px;

    @media #{$screen-sm-xs} {
      margin-top: -70px;
      left: calc(50% - 45px);
      width: 90px;
      height: 90px;
    }

    img {
      object-fit: cover;
      border-radius: 20px;
      width: 180px;
      height: 180px;
      @media #{$screen-sm-xs} {
        width: 90px;
        height: 90px;
      }
    }
  }
}
</style>
