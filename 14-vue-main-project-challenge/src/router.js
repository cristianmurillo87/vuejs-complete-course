import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import CoachRegister from './pages/coaches/CoachRegistration.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // coaches/1/contact
      ],
    },
    {
      path: '/register',
      component: CoachRegister,
    },
    { path: '/requests', component: RequestReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
