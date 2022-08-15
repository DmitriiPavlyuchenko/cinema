import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AppMovies from "@/components/AppMovies.vue";
import AppSerials from "@/components/AppSerials.vue";
import AppSettings from "@/components/AppSettings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "movies",
    component: AppMovies,
  },
  {
    path: "/series",
    name: "series",
    component: AppSerials,
  },
  {
    path: "/settings",
    name: "settings",
    component: AppSettings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
