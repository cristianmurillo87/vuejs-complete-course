export default {
  authenticate(state, payload) {
    state.authenticated = payload.authenticated;
  }
};
