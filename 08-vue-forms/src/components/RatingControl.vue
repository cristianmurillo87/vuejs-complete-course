<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="setActiveOption('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="setActiveOption('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="setActiveOption('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // modelValue is a reserver property in Vue so that the v-model attribute
  // can be applied in a custom component
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    activeOption: function () {
      return this.modelValue;
    }
  },
  methods: {
    setActiveOption: function (option) {
      this.$emit("update:modelValue", option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
