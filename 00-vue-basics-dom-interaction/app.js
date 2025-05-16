const app = Vue.createApp({
  data: () => {
    return {
      counter: 0,
      name: "",
      id: "",
      confirmedName: ""
    };
  },
  methods: {
    increaseCounter: function (step) {
      this.counter += step ?? 0;
    },
    decreaseCounter: function (step) {
      if (this.counter > 0) this.counter -= step ?? 0;
    },
    // used a different sintax here (just to keep in mind it's also valid)
    setName(event) {
      this.name = event.target.value;
    },
    setId(event, preffix) {
      this.id = event.target.value ? `${preffix}${event.target.value}` : "";
    },
    submitForm: function () {},
    confirmInput: function () {
      this.confirmedName = this.name;
    }
  }
});

app.mount("#events");
