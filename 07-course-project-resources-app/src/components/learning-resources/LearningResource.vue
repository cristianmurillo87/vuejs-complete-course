<template>
  <base-card>
    <header>
      <h3>{{ title }}</h3>
      <base-button mode="flat" @click="deleteResource(id)">Delete</base-button>
    </header>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </base-card>
</template>

<script>
export default {
  inject: ["deleteResource"],
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    link: {
      type: String
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
