<template>
  <base-container title="Vuex" v-if="authenticated">
    <favorite-value></favorite-value>
    <the-counter></the-counter>
    <button @click="addOne">Add 2</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      this.$store.commit("increment");
    }
  },
  computed: {
    authenticated() {
      return this.$store.getters.authenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
