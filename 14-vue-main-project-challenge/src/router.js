import { createRouter, createWebHistory } from 'vue-router'

// import CoachDetail from './pages/coaches/CoachDetail.vue'
// import ContactCoach from './pages/requests/ContactCoach.vue'
// import CoachRegistration from './pages/coaches/CoachRegistration.vue'
// import RequestReceived from './pages/requests/RequestReceived.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import store from './stores/index.js'

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')
const RequestReceived = () => import('./pages/requests/RequestReceived.vue')

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
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    { path: '/requests', component: RequestReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.authenticated) {
    next('/auth')
  } else if (to.meta.requiresUnauth && store.getters.authenticated) {
    next('/coaches')
  } else {
    next()
  }
})

export default router
