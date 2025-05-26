<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('create-resource')"
      :mode="createResourceButtonMode"
      >Create Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import CreateResource from "./CreateResource.vue";

export default {
  components: {
    StoredResources,
    CreateResource
  },
  data: function () {
    return {
      selectedTab: "stored-resources",
      storedResources: [
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
  },
  provide: function () {
    return {
      resources: this.storedResources
    };
  },
  computed: {
    storedResourcesButtonMode: function () {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    createResourceButtonMode: function () {
      return this.selectedTab === "create-resource" ? null : "flat";
    }
  },
  methods: {
    setSelectedTab: function (tab) {
      this.selectedTab = tab;
    }
  }
};
</script>
