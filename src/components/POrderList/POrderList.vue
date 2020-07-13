<template>
  <div class="order-list">
    <transition-group
      name="slide-up"
      tag="ul"
      appear
      :css="false"
      @before-enter="listBeforeEnter"
      @enter="listEnter"
      @leave="listLeave"
    >
      <p-order-item v-for="order in orders" :key="order.name" :order="order" />
    </transition-group>
  </div>
</template>

<script>
import { gsap } from 'gsap'
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
  },

  methods: {
    listBeforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(-100px)'
    },
    listEnter(el, done) {
      gsap.to('.order-item', {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => done()
      })
    },
    listLeave(el, done) {
      gsap.to('.order-item', {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => done()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  padding: 0px;
  ul {
    position: relative;
    padding: 0px;
  }
}
</style>
