import { createStore } from 'vuex'
import coachesModule from './modules/coaches'
import requestsModule from './modules/requests'
import authModule from './modules/auth'

export default createStore({
  namespaced: true,
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
})
