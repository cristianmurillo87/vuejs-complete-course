<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";

export default {
  components: {
    TheHeader,
    TheResources
  }
};
</script>

<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>

<style>
li {
  margin: auto;
  max-width: 40rem;
}
</style>
