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
//     wrapper = mount(AppFooter, {
//       global: {
//         plugins: [router],
//       },
//     });
//     const button = wrapper.findAllComponents(".link");
//     expect(button).toHaveLength(3);
//     router.push({ name: "home" });
//     await router.isReady();
//
//     expect(wrapper.html()).toContain("Кино");
//   });
// });
