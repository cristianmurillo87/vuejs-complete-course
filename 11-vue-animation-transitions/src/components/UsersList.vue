<template>
  <ul>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  </ul>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Cristian", "Andres", "Jane", "Michael"]
    };
  },
  methods: {
    addUser() {
      console.log(this.$refs.userNameInput);
      const user = this.$refs.userNameInput.value;
      if (!user) return;
      this.users.unshift(user);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/** For the elements which are not entered or leaving */
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
