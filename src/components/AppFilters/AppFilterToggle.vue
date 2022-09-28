<template>
  <div :class="$style['filter-rating']" @click="openFilter">
    <ButtonBase :class="$style['open-filter']">
      <slot name="button-title"></slot>
    </ButtonBase>
    <IconBase
      :class="$style['arrow-down']"
      height="14"
      icon-name="arrow-down"
      width="14"
    >
      <IconArrowDown />
    </IconBase>
  </div>
</template>

<script>
import IconArrowDown from "@/components/icons/IconArrowDown.vue";

export default {
  name: "AppFilterToggle",
  components: { IconArrowDown },
  methods: {
    openFilter() {
      this.isFiltersOpen
        ? (this.isFiltersOpen = false)
        : (this.isFiltersOpen = true);
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
