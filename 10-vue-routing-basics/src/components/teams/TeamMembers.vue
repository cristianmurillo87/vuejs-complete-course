<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  components: {
    UserItem
  },
  inject: ["users", "teams"],
  // teamId will be passed through the router
  props: ["teamId"],
  data() {
    return {
      teamName: "",
      members: []
    };
  },
  methods: {
    loadTeamMembers: function (teamId) {
      const selectedTeam =
        teamId && this.teams.find((team) => team.id === teamId);

      if (!selectedTeam) {
        this.$router.push("/teams");
        return;
      }

      this.teamName = selectedTeam.name;
      this.members = [];
      selectedTeam?.members.forEach((id) => {
        const user = this.users.find((user) => user.id === id);
        user && this.members.push(user);
      });
    }
  },
  // called when the component is created, before it's  displayed on the screen
  // but after the required data is loaded
  created: function () {
    this.loadTeamMembers(this.teamId);
  },
  watch: {
    // run loadTeamMembers when this.$route changes
    // otherwise the data won't be refreshed when the navigation data is updated
    // and the new route is similar to the current one
    // e.g. when navigating from /teams/t1 to /teams/t2
    teamId: function (id) {
      this.loadTeamMembers(id);
    },
    $route: function (route) {
      console.log("Route: ", route);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
