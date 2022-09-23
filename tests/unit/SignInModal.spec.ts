import { mount } from "@vue/test-utils";
import SignInModal from "@/components/modals/SignInModal.vue";
import IconEye from "@/components/icons/IconEye.vue";

describe("SignInModal", () => {
  let wrapper;

  const DEFAULT_PROPS = {
    isModalOpen: true,
  };

  const createComponent = (props?) => {
    wrapper = mount(SignInModal, {
      props: {
        ...DEFAULT_PROPS,
        ...props,
      },
      data() {
        return {
          type: "password",
        };
      },
    });
  };

  it("Render icon eye when input type password", () => {
    createComponent();
    expect(wrapper.findComponent(IconEye).isVisible()).toBe(true);
  });

  // it.todo('<ModalBase @closeModal="close">');
  // it.todo('<ButtonBase @click="changeType">');
  // it.todo('<ButtonBase @click="signIn">');
});
