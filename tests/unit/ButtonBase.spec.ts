import ButtonBase from "@/components/ui/ButtonBase.vue";
import { shallowMount } from "@vue/test-utils";

describe("ButtonBase", () => {
  let wrapper;

  const createComponent = () => {
    wrapper = shallowMount(ButtonBase, {
      slots: {
        default: '<span class="fake"></span>',
      },
    });

    it("Slot render", () => {
      const cmp = wrapper.find("button");
      expect(cmp.findAll(".fake").length).toBe(1);
    });
  };
});
