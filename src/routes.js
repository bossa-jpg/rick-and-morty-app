import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import EpisodesView from "./views/EpisodesPage.vue";
import CharactersView from "./views/CharactersPage.vue";
import LocationsView from "./components/LocationsPage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/episodes",
      name: "Episodes",
      component: EpisodesView,
    },
    {
      path: "/characters",
      name: "Characters",
      component: CharactersView,
    },
    {
      path: "/locations",
      name: "Locations",
      component: LocationsView,
    },
  ],
});

export default router;
