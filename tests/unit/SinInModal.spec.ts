import { shallowMount, enableAutoUnmount } from "@vue/test-utils";
import SignInModal from "@/components/modals/SignInModal.vue";

describe("SignInModal", () => {
  enableAutoUnmount(beforeEach);

  let wrapper;

  const DEFAULT_PROPS = {
    isModalOpen: true,
  };

  const createComponent = (props) => {
    wrapper = shallowMount(SignInModal, {
      propsData: {
        ...DEFAULT_PROPS,
      },
    });
  };

  it.todo('<IconEye v-if="typePassword">');
  it.todo('<ModalBase @closeModal="close">');
  it.todo('<ButtonBase @click="changeType">');
  it.todo('<ButtonBase @click="signIn">');
});
