import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView"),
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: () => import("../views/EpisodesView"),
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../views/CharactersView"),
  },
  {
    path: "/locations",
    name: "Locations",
    component: () => import("../views/LocationsView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
