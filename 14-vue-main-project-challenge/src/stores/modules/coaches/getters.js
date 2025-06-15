export default {
  coaches(state) {
    return state.coaches
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches
    const userId = rootGetters.userId
    return coaches.some((coach) => coach.id === userId)
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch
    if (!lastFetch) return true

    const currentTimeStamp = new Date().getTime()
    // number of minutes since last fetch....
    // used for updating cached data every minute
    return (currentTimeStamp - lastFetch) / 1000 > 60
  },
}
