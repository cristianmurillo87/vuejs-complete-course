import { createStore } from 'vuex'
import productStore from './products'
import shoppingCartStore from './shopping-cart'

export default createStore({
  modules: {
    products: productStore,
    cart: shoppingCartStore,
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn
    },
  },
  mutations: {
    authenticate(state, loggedIn) {
      state.isLoggedIn = loggedIn
    },
  },
  actions: {
    login(context) {
      context.commit('authenticate', true)
    },
    logout(context) {
      context.commit('authenticate', false)
    },
  },
})
