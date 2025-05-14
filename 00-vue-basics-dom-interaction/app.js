const app = Vue.createApp({
  data: () => {
    return {
      courseLearningGoal: "Finish this course and learn Vue!",
      courseMasteringGoal: "Master Vue and build amazing applications!",
      vueLink: "https://vuejs.org/"
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      return randomNumber < 0.5
        ? this.courseLearningGoal
        : this.courseMasteringGoal;
    }
  }
});

app.mount("#user-goal");
