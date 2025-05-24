<template>
  <li>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="friendFullName">Name</label>
        <input
          v-model="fullName"
          type="text"
          name="friendFullName"
          required
          placeholder="Full name"
        />
      </div>
      <div>
        <label for="phoneNumber">Phone</label>
        <input
          v-model="phoneNumber"
          type="text"
          name="phoneNumber"
          required
          placeholder="Phone number"
        />
      </div>

      <div>
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label for="isFavorite">Mark contact as favorite</label>
        <input
          type="checkbox"
          name="isFavorite"
          id="isFavorite"
          v-model="markAsFavorite"
        />
      </div>
      <button @click="submitFriend">Add Friend</button>
    </form>
  </li>
</template>
<script>
export default {
  data() {
    return {
      fullName: "",
      phoneNumber: "",
      email: "",
      markAsFavorite: false
    };
  },
  emits: ["friend-submitted"],
  methods: {
    submitFriend: function () {
      if (!this.fullName || !this.phoneNumber || !this.email) return;
      this.$emit("friend-submitted", {
        name: this.fullName,
        phone: this.phoneNumber,
        email: this.email,
        favorite: this.markAsFavorite
      });
      this.resetForm();
    },
    resetForm: function () {
      this.fullName = "";
      this.phoneNumber = "";
      this.email = "";
      this.markAsFavorite = false;
    }
  }
};
</script>
