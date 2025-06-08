export default {
  increment(context) {
    // 'increment' -> this.increment mutation
    context.commit("increment");
  },
  increase(context, payload) {
    context.commit("increase", payload);
  }
};
