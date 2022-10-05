<template>
  <section :class="$style.favorite">
    <AppFavoriteList />
  </section>
</template>

<script>
import AppFavoriteList from "@/components/AppFavorites/AppFavoriteList";

export default {
  name: "FavoritesView",
  components: { AppFavoriteList },
};
</script>

<style lang="scss" module>
.favorite {
  display: flex;
  gap: 10rem;
}
</style>
