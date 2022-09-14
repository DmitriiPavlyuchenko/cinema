<template>
  <form :class="$style.filters" @submit.prevent>
    <h3 class="filter-title">Фильтры</h3>
    <AppFilterChoices />
    <AppFilterRating />
  </form>
</template>

<script>
import AppFilterChoices from "@/components/AppFilters/AppFilterChoices";
import AppFilterRating from "@/components/AppFilters/AppFilterRating";

export default {
  name: "AppFilters",
  components: { AppFilterChoices, AppFilterRating },
};
</script>

<style lang="scss" module>
.filters {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  width: 20%;
}
</style>
