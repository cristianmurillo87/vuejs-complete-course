<template>
  <ul>
    <li v-for="resource in resources" :key="resource.id">
      <learning-resource
        :id="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></learning-resource>
    </li>
  </ul>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  components: {
    LearningResource
  },
  props: ["resources"]
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
