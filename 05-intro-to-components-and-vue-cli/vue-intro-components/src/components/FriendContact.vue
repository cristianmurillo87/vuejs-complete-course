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
  emits: ["toggle-favorite"],
  data: function () {
    return {
      showDetails: false,
      isContactFavorite: this.isFavorite
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
      console.log("emitted event");
    }
  }
};
</script>
<template>
  <li>
    <h2>{{ name }} {{ isContactFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleIsFavorite">
      {{ isContactFavorite ? "Unmark" : "Mark" }} as favorite
    </button>
    <button @click="toggleDisplayDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>

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
