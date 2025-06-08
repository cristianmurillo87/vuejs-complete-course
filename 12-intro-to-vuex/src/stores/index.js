import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import countersModule from "./counter/index.js";

const store = createStore({
  modules: {
    counter: countersModule
  },
  state() {
    return {
      authenticated: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
