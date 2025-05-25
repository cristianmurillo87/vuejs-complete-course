<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    StoredResources,
    TheHeader
  },
  data: function () {
    return {
      resources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://vuejs.org"
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com"
        }
      ]
    };
  }
};
</script>

<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="resources"></stored-resources>
</template>

<style>
li {
  margin: auto;
  max-width: 40rem;
}
</style>
