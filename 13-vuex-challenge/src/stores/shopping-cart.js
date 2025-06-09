const shoppingCartStore = {
  namespaced: true,
  state() {
    return {
      cart: [],
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('push', payload.product)
    },
    removeFromCart(context, payload) {
      context.commit('remove', payload.id)
    },
  },
  mutations: {
    push(state, payload) {
      const index = state.cart.findIndex((item) => item.id === payload.id)
      if (index > -1) {
        state.cart[index].quantity += 1
      } else {
        state.cart.push({ ...payload, quantity: 1 })
      }
    },
    remove(state, id) {
      if (!id) return
      const index = state.cart.findIndex((item) => item.id === id)
      if (index < 0) return

      state.cart = state.cart.filter((p) => p.id !== id)
    },
  },
  getters: {
    qty(state) {
      return state.cart.reduce((prev, curr) => prev + curr.quantity, 0)
    },
    total(state) {
      return state.cart.reduce((prev, curr) => prev + curr.price, 0.0).toFixed(2)
    },
    cartItems(state) {
      return state.cart
    },
  },
}

export default shoppingCartStore
