<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
  computed: {
    loggedout() {
      return this.$store.getters.loggedout
    },
  },
  watch: {
    loggedout(curr, prev) {
      if (curr && curr !== prev) {
        this.$router.replace('/coaches')
      }
    },
  },
  created() {
    this.$store.dispatch('tryLogin')
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.router-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
