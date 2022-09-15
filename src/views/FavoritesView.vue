<template>
  <section :class="$style.favorite">
    <AppFilters />
    <AppFavoriteList />
  </section>
</template>

<script>
import AppFilters from "@/components/AppFilters/AppFilters";
import AppFavoriteList from "@/components/AppFavorites/AppFavoriteList";

export default {
  name: "FavoritesView",
  components: { AppFilters, AppFavoriteList },
};
</script>

<style lang="scss" module>
.favorite {
  display: flex;
  gap: 10rem;
}
</style>
