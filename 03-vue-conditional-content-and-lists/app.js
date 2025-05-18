const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: ""
    };
  },
  methods: {
    addGoal: function () {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
    removeGoal: function (index) {
      if (this.goals.length < index) return;
      this.goals.splice(index, 1);
    }
  }
});

app.mount("#user-goals");
