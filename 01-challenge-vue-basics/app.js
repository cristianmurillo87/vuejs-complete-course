const app = Vue.createApp({
  data: function () {
    return {
      secret: 37,
      counter: 0,
      lastTimeOut: null
    };
  },
  watch: {
    result(value) {
      if (this.lastTimeOut) clearTimeout(this.lastTimeOut);
      this.lastTimeOut = setTimeout(() => {
        this.counter = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if (this.counter < this.secret) return "Not there yet";
      if (this.counter > this.secret) return "Too much!";
      return `${this.secret}`;
    }
  },
  methods: {
    increase: function (step) {
      this.counter += step;
      console.log(this.counter);
    },
    reset: function () {
      return setTimeout(() => {
        if (this.counter === 0) return;
        this.counter = 0;
      }, 5000);
    }
  }
});

app.mount("#assignment");
