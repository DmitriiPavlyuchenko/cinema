import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/ui";
import store from "@/store";
import Toaster from "@meforma/vue-toaster/src";

const app = createApp(App);

components.forEach((component: { name: string }) => {
  app.component(component.name, component);
});

app
  .use(router)
  .use(store)
  .use(Toaster, {
    position: "top",
  })
  .mount("#app");
