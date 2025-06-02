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
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  components: {
    UserItem
  },
  inject: ["users", "teams"],
  data() {
    return {
      teamName: "",
      members: []
    };
  },
  // called when the component is created, before it's  displayed on the screen
  // but after the required data is loaded
  created: function () {
    const params = this.$route.params;
    const teamId = params?.teamId;

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
