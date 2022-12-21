import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/rick-and-morty-app/",
    name: "home",
    component: () => import("../views/HomeView"),
  },
  {
    path: "/rick-and-morty-app/episodes",
    name: "Episodes",
    component: () => import("../views/EpisodesView"),
  },
  {
    path: "/rick-and-morty-app/characters",
    name: "Characters",
    component: () => import("../views/CharactersView"),
  },
  {
    path: "/rick-and-morty-app/locations",
    name: "Locations",
    component: () => import("../views/LocationsView"),
  },
  {
    path: "/rick-and-morty-app/api/episode/:id",
    name: "Episode",
    component: () => import("../views/EpisodeView"),
  },
  {
    path: "/rick-and-morty-app/api/character/:id",
    name: "Character",
    component: () => import("../views/CharacterView"),
  },
  {
    path: "/rick-and-morty-app/api/location/:id",
    name: "Location",
    component: () => import("../views/LocationView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
