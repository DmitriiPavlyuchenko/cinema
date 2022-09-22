import ButtonBase from "@/components/ui/ButtonBase.vue";
import { mount } from "@vue/test-utils";

describe("ButtonBase", () => {
  let wrapper;

  const createComponent = mount(ButtonBase, {
    slots: {
      default: '<span class="fake"></span>',
    },
  });

  it("Render", () => {
    expect(createComponent.html()).toBe(
      '<button><span class="fake"></span></button>'
    );
  });

  it("Slot render", () => {
    const cmp = createComponent.find("button");
    expect(cmp.findAll(".fake").length).toBe(1);
  });
});
