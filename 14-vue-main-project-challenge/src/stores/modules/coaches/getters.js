export default {
  coaches(state) {
    console.log('coaches', state.coaches)
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
}
