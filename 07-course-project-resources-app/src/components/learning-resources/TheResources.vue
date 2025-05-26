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
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      resources: this.storedResources,
      createResource: this.createResource,
      deleteResource: this.deleteResource
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
    },

    createResource(title, description, link) {
      const resource = {
        id: new Date().toISOString(),
        title,
        description,
        link
      };
      this.storedResources.push(resource);
      this.selectedTab = "stored-resources";
    },

    deleteResource: function (resourceId) {
      // use this instead of filtering to modify the array in-place because storedResources was injected
      // into the child components
      // otherwise, the UI wont be refreshed
      const index = this.storedResources.findIndex(
        (res) => res.id === resourceId
      );
      if (index === -1) return;
      this.storedResources.splice(index, 1);
    }
  }
};
</script>
