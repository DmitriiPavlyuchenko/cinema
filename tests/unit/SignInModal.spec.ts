// import { shallowMount, enableAutoUnmount } from "@vue/test-utils";
// import SignInModal from "@/components/modals/SignInModal.vue";
// import IconEye from "@/components/icons/IconEye.vue";
//
// describe("SignInModal", () => {
//   enableAutoUnmount(beforeEach);
//
//   let wrapper;
//
//   const DEFAULT_PROPS = {
//     isModalOpen: true,
//   };
//
//   const createComponent = ({ props }) => {
//     wrapper = shallowMount(SignInModal, {
//       props: {
//         ...DEFAULT_PROPS,
//         ...props,
//       },
//       type: "password",
//     });
//   };
//
//   it("Render icon eye when input type password", () => {
//     createComponent({ props: { type: "password" } });
//     expect(wrapper.findComponent(IconEye).isVisible()).toBe(true);
//   });
//
//   // enableAutoUnmount(afterEach);
//
//   it.todo('<ModalBase @closeModal="close">');
//   it.todo('<ButtonBase @click="changeType">');
//   it.todo('<ButtonBase @click="signIn">');
// });
