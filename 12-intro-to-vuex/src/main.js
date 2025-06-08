import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
      authenticated: false
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    authenticate(state, payload) {
      state.authenticated = payload.authenticated;
    }
  },
  actions: {
    increment(context) {
      // 'increment' -> this.increment mutation
      context.commit("increment");
    },
    increase(context, payload) {
      context.commit("increase", payload);
    },
    login(context) {
      context.commit("authenticate", { authenticated: true });
    },
    logout(context) {
      context.commit("authenticate", { authenticated: false });
    }
  },
  getters: {
    finalCounter(currentState) {
      return currentState.counter * 2;
    },
    normalizedCounter(currentState) {
      const finalCounter = currentState.counter * 3;

      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
    authenticated(currentState) {
      return currentState.authenticated;
    }
  }
});

const app = createApp(App);
app.use(store);

app.mount("#app");
