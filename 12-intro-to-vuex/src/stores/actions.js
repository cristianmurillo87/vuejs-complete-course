export default {
  login(context) {
    context.commit("authenticate", { authenticated: true });
  },
  logout(context) {
    context.commit("authenticate", { authenticated: false });
  }
};
