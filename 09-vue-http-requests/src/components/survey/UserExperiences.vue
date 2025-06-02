<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="!loading && error">{{ error }}</div>
      <div v-else-if="!error">
        <p v-if="!loading && !results?.length">
          No stored experiences found. Start adding survey results first.
        </p>
        <ul v-else-if="!loading && results?.length">
          <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
          ></survey-result>
        </ul>
      </div>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult
  },
  data: function () {
    return {
      results: [],
      loading: false,
      error: null
    };
  },
  methods: {
    loadExperiences: function () {
      this.loading = true;
      this.error = null;
      fetch(
        "https://react-http-68e31-default-rtdb.europe-west1.firebasedatabase.app/surveys.json",
        (response) => {
          if (response.ok) return response.json();
        }
      )
        .then(async (data) => {
          const response = (await data.json()) ?? [];
          const results = Object.keys(response).map((key) => {
            return {
              id: key,
              name: response[key].userName,
              rating: response[key].rating
            };
          });
          this.results = results;
        })
        .catch(() => {
          this.error =
            "An error occurred while trying to retrieve the stored user experiences. Please try again later.";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  // Hook similar to ngOnInit in Angular
  mounted: function () {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
