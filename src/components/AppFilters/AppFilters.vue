<template>
  <aside :class="$style.aside">
    <form :class="$style.filters" @submit.prevent>
      <h3 class="filter-title">Фильтры</h3>
      <AppFilterChoices />
      <AppFilterYearProduction />
      <AppFilterRating />
      <AppFilterGenres />
      <AppFilterYear />
    </form>
  </aside>
</template>

<script>
import AppFilterChoices from "@/components/AppFilters/AppFilterChoices";
import AppFilterRating from "@/components/AppFilters/AppFilterRating";
import AppFilterGenres from "@/components/AppFilters/AppFilterGenres";
import AppFilterYear from "@/components/AppFilters/AppFilterYear";
import AppFilterYearProduction from "@/components/AppFilters/AppFilterYearProduction";

export default {
  name: "AppFilters",
  components: {
    AppFilterYearProduction,
    AppFilterYear,
    AppFilterChoices,
    AppFilterRating,
    AppFilterGenres,
  },
};
</script>

<style lang="scss" module>
.aside {
  width: 20%;
}

.filters {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  width: 100%;
}
</style>
