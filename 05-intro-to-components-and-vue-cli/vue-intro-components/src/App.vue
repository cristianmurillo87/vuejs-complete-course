<script setup>
import FriendContact from "./components/FriendContact.vue";
import CreateFriend from "./components/CreateFriend.vue";
</script>

<script>
export default {
  data: function () {
    return {
      friends: [
        {
          id: "cristian",
          name: "Cristian Murillo",
          email: "cristian@localhost.com",
          phone: "0123 4567 68900",
          favorite: true
        },
        {
          id: "pedro",
          name: "Pedro Perez",
          email: "pedro@localhost.com",
          phone: "0143 4768 87922",
          favorite: false
        }
      ]
    };
  },
  methods: {
    toggleFavoriteStatus: function (event) {
      const id = event.id;
      this.friends.forEach((fr) => {
        if (fr.id === id) {
          fr.favorite = !fr.favorite;
          return;
        }
      });
    },
    deleteFriend: function (event) {
      this.friends = this.friends.filter((fr) => fr.id !== event.id);
    },
    onFriendSubmitted: function (event) {
      const id = `${Math.ceil(Math.random(0, 1) * 3456)}-${Date.now()}`;
      this.friends.push({ id, ...event });
    }
  }
};
</script>

<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <create-friend @friend-submitted="onFriendSubmitted"></create-friend>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.favorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
