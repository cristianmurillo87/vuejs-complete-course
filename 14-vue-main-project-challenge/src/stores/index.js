import { createStore } from 'vuex'
import coachesStore from './modules/coaches'

export default createStore({
  namespaced: true,
  modules: {
    coaches: coachesStore,
  },
  state() {
    return {
      userId: 'c3',
    }
  },
  getters: {
    userId(state) {
      return state.userId
    },
  },
})
