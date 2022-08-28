<template>
  <div class="similar-movies-wrapper">
    <ul class="similar-movies">
      <li
        v-for="similarMovie in similarMovies.items"
        :key="similarMovie.filmId"
        class="similar-movie"
      >
        <span class="similar-movie-name">{{ similarMovie.nameRu }}</span>
      </li>
    </ul>
    <span v-if="hasSimilarMovies" class="similar-movies-empty"
      >Извините, мы не смогли найти похожих фильмов</span
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppSimilarMovies",
  props: {
    similarMovies: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasSimilarMovies() {
      return this.similarMovies.items.length === 0;
    },
  },
});
</script>

<style scoped></style>
