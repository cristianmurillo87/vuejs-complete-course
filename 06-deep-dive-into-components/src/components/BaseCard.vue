<template>
  <div>
    <header v-if="$slots['card-header']">
      <!-- named slot-->
      <slot name="card-header"></slot>
    </header>
    <!-- default slot-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted: function () {
    // checking whether something has been added to the
    // card-header slot in the template
    console.log(this.$slots["card-header"]);
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
