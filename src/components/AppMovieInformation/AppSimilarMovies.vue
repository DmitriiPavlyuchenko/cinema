<template>
  <div :class="$style['similar-movies-wrapper']">
    <h4 :class="$style['similar-movies-title']">Список похожих фильмов</h4>
    <ul :class="$style['similar-movies']">
      <li
        v-for="similarMovie in similarMovies.items"
        :key="similarMovie.filmId"
        :class="$style['similar-movie']"
      >
        <router-link
          :class="$style['similar-movie-link']"
          :to="{
            name: 'movie_information',
            params: { id: similarMovie.filmId },
          }"
        >
          <img
            :alt="similarMovie.nameRu"
            :class="$style['similar-movie-img']"
            :src="similarMovie.posterUrlPreview"
          />
          <span :class="$style['similar-movie-name']">{{
            similarMovie.nameRu
          }}</span>
        </router-link>
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
      return this.similarMovies.items?.length === 0;
    },
  },
});
</script>

<style lang="scss" module>
.similar-movies-wrapper {
  padding: 3rem 0;
}

.similar-movies-title {
  font-weight: 600;
  font-size: 1.5rem;
}

.similar-movies {
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
}

.similar-movie {
  width: 10rem;
  height: auto;
  text-align: center;
}

.similar-movie-img {
  width: 100%;
  height: 100%;
}

.similar-movie-link {
  cursor: pointer;
}

.similar-movie-name {
  font-size: 0.8rem;
}
</style>
