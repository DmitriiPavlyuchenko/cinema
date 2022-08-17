import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/ui";
import store from "@/store";

const app = createApp(App);

components.forEach((component: { name: string }) => {
  app.component(component.name, component);
});

app.use(router).use(store).mount("#app");
