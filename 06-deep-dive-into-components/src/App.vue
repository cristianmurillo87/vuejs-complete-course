<template>
  <div>
    <app-header></app-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
// Components declared this way can only be used in this component,
// they won't be available inside childred components
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
export default {
  components: {
    "app-header": TheHeader,
    "badge-list": BadgeList,
    "user-info": UserInfo
  },
  data() {
    return {
      activeUser: {
        name: "Cris Murillo",
        description: "Site owner and admin",
        role: "admin"
      }
    };
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
