import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
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
    console.log("To", to);
    console.log("From", from);
    console.log("Saved", savedPosition);
    return savedPosition ? savedPosition : { left: 0, top: 0 };
  }
});

const app = createApp(App);

app.use(router);
app.mount("#app");
