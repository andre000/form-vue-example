import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderType: 'food',
    orders: []
  },
  mutations: {
    CHANGE_ORDER_TYPE(state, type) {
      state.orderType = type
    },

    ADD_ORDER(state, orders) {
      state.orders.push({ ...orders, type: state.orderType })
    }
  },
  getters: {
    filteredOrders({ orders, orderType }) {
      return orders.filter(o => o.type === orderType)
    }
  }
})
