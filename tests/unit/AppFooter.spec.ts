// import AppFooter from "@/components/AppFooter.vue";
// import { createRouter, createWebHistory } from "vue-router";
// import { routes } from "@/router";
// import HomeView from "@/views/HomeView.vue";
// import { mount } from "@vue/test-utils";
//
// describe("AppFooter", () => {
//   let wrapper;
//
//   const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });
//
//   it("Redirect on Home", async () => {
//     await router.push({ name: "home" });
//     await router.isReady();
//     wrapper = mount(AppFooter, {
//       global: {
//         plugins: [router],
//       },
//     });
//     expect(wrapper.findComponent(HomeView).exists()).toBe(true);
//   });
// });
