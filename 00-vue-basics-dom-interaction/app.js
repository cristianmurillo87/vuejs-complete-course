const app = Vue.createApp({
  data: () => {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter: function () {
      this.counter += 1;
    },
    decreaseCounter: function () {
      this.counter = this.counter === 0 ? 0 : this.counter - 1;
    }
  }
});

app.mount("#events");
