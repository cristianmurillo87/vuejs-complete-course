<template>
  <section>
    <h2>Your Cart</h2>
    <h3>
      Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge>
    </h3>
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.id"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.quantity"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue'

export default {
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.getters['cart/cartItems']
    },
    cartTotal() {
      return this.$store.getters['cart/total']
    },
  },
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
