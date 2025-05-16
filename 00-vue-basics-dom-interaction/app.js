const app = Vue.createApp({
  data: () => {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    increaseCounter: function (step) {
      this.counter += step ?? 0;
    },
    decreaseCounter: function (step) {
      if (this.counter > 0) this.counter -= step ?? 0;
    },
    setName(event) {
      this.name = event.target.value;
    }
  }
});

app.mount("#events");
