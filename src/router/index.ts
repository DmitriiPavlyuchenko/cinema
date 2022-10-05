import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppSettings from "@/components/AppSettings.vue";
import AppMovie from "@/components/AppMovieInformation/AppMovie.vue";
import MovieView from "@/views/MovieView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import CartoonsView from "@/views/CartoonsView.vue";
import SeriesView from "@/views/SeriesView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main-layout" },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    meta: { layout: "page-layout" },
    component: MovieView,
  },
  {
    path: "/series",
    name: "series",
    meta: { layout: "page-layout" },
    component: SeriesView,
  },
  {
    path: "/settings",
    name: "settings",
    meta: { layout: "page-layout" },
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
    meta: { layout: "page-layout" },
    component: CartoonsView,
  },
  {
    path: "/favorites",
    name: "favorites",
    meta: { layout: "page-layout" },
    component: FavoritesView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page_not_found",
    component: PageNotFoundView,
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
