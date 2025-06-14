import { createStore } from 'vuex'
import coachesStore from './modules/coaches'
import requestsStore from './modules/requests'

export default createStore({
  namespaced: true,
  modules: {
    coaches: coachesStore,
    requests: requestsStore,
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
