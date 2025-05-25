<template>
  <div>
    <app-header></app-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// Components declared this way can only be used in this component,
// they won't be available inside childred components
import TheHeader from "./components/layout/TheHeader.vue";
import ActiveGoals from "./components/goals/ActiveGoals.vue";
import ManageGoals from "./components/goals/ManageGoals.vue";

export default {
  components: { "app-header": TheHeader, ActiveGoals, ManageGoals },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Cris Murillo",
        description: "Site owner and admin",
        role: "admin"
      }
    };
  },
  methods: {
    setSelectedComponent: function (cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
