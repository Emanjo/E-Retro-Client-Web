import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Session from "../views/Session.vue";
import Start from "../views/Start.vue";
import SessionOverview from "../views/SessionOverview.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/session",
    name: "Session",
    component: Session,
    children: [
      {
        path: "/",
        component: SessionOverview,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
