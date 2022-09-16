import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AppSerials from "@/components/AppSerials.vue";
import AppSettings from "@/components/AppSettings.vue";
import AppMovie from "@/components/AppMovieInformation/AppMovie.vue";
import MovieView from "@/views/MovieView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import CartoonsView from "@/views/CartoonsView.vue";
import SeriesView from "@/views/SeriesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: MovieView,
  },
  {
    path: "/series",
    name: "series",
    component: SeriesView,
  },
  {
    path: "/settings",
    name: "settings",
    component: AppSettings,
  },
  {
    path: "/:id",
    name: "movie_information",
    component: AppMovie,
  },
  {
    path: "/cartoons",
    name: "cartoons",
    component: CartoonsView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
