<template>
  <base-card>
    <!-- rendered in the "card-header" slot-->
    <template v-slot:card-header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <!-- rendered in the default slot-->
    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
import BaseCard from "./base/BaseCard.vue";
export default {
  components: {
    "base-card": BaseCard
  },
  props: ["fullName", "infoText", "role"]
};
</script>

<style scoped></style>
