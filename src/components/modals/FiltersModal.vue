<template>
  <ModalBase :isModalOpen="isFiltersOpen">
    <template #header>
      <span>Фильтры</span>
    </template>
    <template #body></template>
  </ModalBase>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "FiltersModal",
  props: {
    isFiltersOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
  data() {
    return {};
  },
  watch: {
    isFiltersOpen() {
      if (this.isFiltersOpen) {
        this.getFilters();
      }
    },
  },
  methods: {
    ...mapActions("filters", ["getFilters"]),
    close() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style lang="scss" module></style>
