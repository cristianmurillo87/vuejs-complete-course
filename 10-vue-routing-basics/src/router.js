import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import UsersFooter from "./components/users/UsersFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  // browser built-in history support
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams"
    },
    {
      name: "teams",
      path: "/teams",
      meta: {
        needsAuth: true
      },
      components: { default: TeamsList, footerRouter: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: "/users",
      components: { default: UsersList, footerRouter: UsersFooter }
    },
    {
      path: "/:notFound(.*)",
      component: NotFound
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 };
  }
});

router.beforeEach(function (to, from, next) {
  if (to.meta?.needsAuth) {
    next();
  } else {
    next();
  }
  /*if (to.name === "team-members") {
    next();
  }
  next({ name: "team-members", params: { teamId: "t2" } });*/
});

export default router;
