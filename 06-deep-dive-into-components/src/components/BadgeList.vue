<template>
  <section>
    <base-card>
      <template v-slot:card-header>
        <h2>Available Badges</h2>
      </template>
      <template v-slot:default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./base/BaseCard.vue";
export default {
  components: {
    "base-card": BaseCard
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
