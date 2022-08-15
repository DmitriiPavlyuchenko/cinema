import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import components from "@/components/ui";

const app = createApp(App);

components.forEach((component: { name: string }) => {
  app.component(component.name, component);
});

app.use(router).use(createPinia).mount("#app");
