<template>
  <base-dialog v-if="formInvalid" title="Invalid Input" @close="confirmError">
    <template #dialog-content>
      <p>At least one of the provided values is invalid.</p>
      <p>
        Please make sure all the required information is provided and try again.
      </p>
    </template>
    <template #dialog-actions>
      <base-button @click="confirmError">Ok</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Create Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["createResource"],
  data: function () {
    return {
      formInvalid: false
    };
  },
  methods: {
    submit: function () {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;
      if (
        title.trim() === "" ||
        description.trim() === "" ||
        link.trim() === ""
      ) {
        this.formInvalid = true;
        return;
      }

      this.createResource(title, description, link);
    },
    confirmError: function () {
      this.formInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
