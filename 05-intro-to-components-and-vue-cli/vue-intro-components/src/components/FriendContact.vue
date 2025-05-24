<script>
export default {
  props: {
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
      this.isContactFavorite = !this.isContactFavorite;
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
