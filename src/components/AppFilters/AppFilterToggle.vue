<template>
  <div :class="$style['filter-rating']" @click="toggleFilter">
    <ButtonBase :class="$style['open-filter']">
      <slot name="button-title"></slot>
    </ButtonBase>
    <IconBase
      v-if="isFilterOpen"
      :class="$style['arrow-down']"
      height="14"
      icon-name="arrow-down"
      width="14"
    >
      <IconArrowDown />
    </IconBase>
    <IconBase
      v-else
      :class="$style['arrow-down']"
      height="14"
      icon-name="arrow-up"
      width="14"
    >
      <IconArrowUp />
    </IconBase>
  </div>
</template>

<script>
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconArrowUp from "@/components/icons/IconArrowUp";

export default {
  name: "AppFilterToggle",
  components: { IconArrowUp, IconArrowDown },
  data() {
    return {
      isFilterOpen: false,
    };
  },
  emits: ["isFilterOpen"],
  methods: {
    toggleFilter() {
      this.isFilterOpen
        ? (this.isFilterOpen = false)
        : (this.isFilterOpen = true);
      this.$emit("isFilterOpen", this.isFilterOpen);
    },
  },
};
</script>

<style lang="scss" module>
.filter-rating {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
}

.arrow-down {
  transform: rotate(180deg);
}
</style>
