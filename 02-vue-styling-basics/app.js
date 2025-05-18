const app = Vue.createApp({
  data: function () {
    return {
      selectedBox: null
    };
  },
  methods: {
    boxSelected: function (selected) {
      this.selectedBox = selected;
    }
  }
});

app.mount("#styling");
