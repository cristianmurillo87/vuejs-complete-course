import { createStore } from 'vuex'
import coachesStore from './modules/coaches'

export default createStore({
  namespaced: true,
  modules: {
    coaches: coachesStore,
  },
})
