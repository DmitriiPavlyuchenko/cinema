<template>
  <MovieListBase :movies="showMovies">
    <template #list-title>Лучшие 250 фильмов</template>
    <template #open-all>
      <router-link :class="$style['open-all']" :to="{ name: 'movies' }"
        >Смотреть все</router-link
      >
    </template>
    <template #show-more>
      <ButtonBase
        v-show="isMoviesListIsEmpty"
        :class="$style['show-more']"
        @click="showMoreMovies"
        >Показать еще
      </ButtonBase>
    </template>
  </MovieListBase>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import { generateRandomNumber } from "@/helpers/generate-random-number";
import { getTopMovies } from "@/api/cinema/movie/movie-information";
import { SERVER_RESPONSE } from "@/constants/server-code";

export default defineComponent({
  name: "AppTopMovies",
  data() {
    return {
      topMoviesList: {},
      showMovies: {},
    };
  },
  created() {
    this.getTopMovies();
  },
  computed: {
    isMoviesListIsEmpty() {
      return this.topMoviesList.length !== 0;
    },
  },
  methods: {
    async getTopMovies() {
      try {
        const firstPage = 1;
        const lastPage = 13;
        const page = generateRandomNumber(firstPage, lastPage);
        const response = await getTopMovies(page);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          const data = response.data.films;
          const firstMovie = 0;
          const lastMovie = 10;
          this.showMovies = data.splice(firstMovie, lastMovie);
          this.topMoviesList = data;
        }
      } catch (e) {
        console.log(e);
      }
    },
    showMoreMovies() {
      const firstMovie = 0;
      const lastMovie = 10;
      const premieres = this.topMoviesList.splice(firstMovie, lastMovie);
      this.showMovies = [...this.showMovies, ...premieres];
    },
  },
});
</script>

<style lang="scss" module>
@import "@/assets/styles/utils/mixins.scss";

.open-all,
.show-more {
  @include default-button;
}

.open-all:hover,
.show-more:hover {
  background-color: $purple-hover;
}
</style>
