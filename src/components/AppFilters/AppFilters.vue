<template>
  <form :class="$style.filters" @submit.prevent>
    <h3 class="filter-title">Фильтры</h3>
    <AppFilterChoices />
    <AppFilterRating />
    <AppFilterGenres />
    <AppFilterYear />
  </form>
</template>

<script>
import AppFilterChoices from "@/components/AppFilters/AppFilterChoices";
import AppFilterRating from "@/components/AppFilters/AppFilterRating";
import AppFilterGenres from "@/components/AppFilters/AppFilterGenres";
import AppFilterYear from "@/components/AppFilters/AppFilterYear";

export default {
  name: "AppFilters",
  components: {
    AppFilterYear,
    AppFilterChoices,
    AppFilterRating,
    AppFilterGenres,
  },
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
