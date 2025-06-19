export default {
  userId(state) {
    return state.userId
  },
  token(state) {
    return state.token
  },
  authenticated(state) {
    return !!state.token
  },
  autoLoggedOut(state) {
    return state.loggedout
  },
}
