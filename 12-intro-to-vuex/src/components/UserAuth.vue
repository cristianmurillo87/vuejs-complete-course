<template>
  <transition mode="out-in">
    <button v-if="!authenticated" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["authenticated"])
  },
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>
