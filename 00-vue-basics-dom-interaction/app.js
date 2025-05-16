const app = Vue.createApp({
  data: function () {
    return {
      counter: 0,
      name: "",
      id: "",
      confirmedName: ""
    };
  },
  watch: {
    // runs every time the value of counter changes
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      if (!this.confirmedName) return "";
      return `Mr. ${this.confirmedName}`;
    }
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
    resetName() {
      this.name = "";
      this.confirmedName = "";
    },
    setId(event, preffix) {
      this.id = event.target.value ? `${preffix}${event.target.value}` : "";
    },
    submitForm: function () {
      alert("Form submitted!!");
    },
    confirmInput: function () {
      this.confirmedName = this.name;
    }
  }
});

app.mount("#events");
