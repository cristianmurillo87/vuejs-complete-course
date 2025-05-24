<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["toggle-favorite", "delete"],
  data: function () {
    return {
      showDetails: false
    };
  },
  methods: {
    toggleDisplayDetails: function () {
      this.showDetails = !this.showDetails;
    },
    toggleIsFavorite: function () {
      this.$emit("toggle-favorite", {
        id: this.id
      });
    },
    deleteFriend: function () {
      this.$emit("delete", {
        id: this.id
      });
    }
  }
};
</script>
<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleIsFavorite">
      {{ isFavorite ? "Unmark" : "Mark" }} as favorite
    </button>
    <button @click="toggleDisplayDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <button @click="deleteFriend">Delete</button>
    <ul v-if="showDetails">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>
