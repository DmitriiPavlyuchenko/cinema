<template>
  <div class="movie">
    <div class="movie-poster"></div>
    <div class="movie-information">
      <h3 class="movie-title">{{ movieInformation.nameRu }}</h3>
      <div class="movie-country-wrapper">
        <span>Страна: </span
        ><span
          v-for="country in movieInformation.countries"
          :key="country.country"
          class="movie-country"
          >{{ country.country }}</span
        >
      </div>
      <span class="movie-description">{{ movieInformation.description }}</span>
      <div
        v-for="genre in movieInformation.genres"
        :key="genre"
        class="movie-genres"
      >
        {{ genre.genre }}
      </div>
      <span class="movie-time"
        >Время {{ movieInformation.filmLength }} мин. /
        {{ convertedTime }}</span
      >
      <span class="rating-age-limits">Возраст: {{ convertedAge }}</span>
      <span class="year">Год производства {{ movieInformation.year }}</span>
      <span class="rating">Рейтинг {{ movieInformation.ratingKinopoisk }}</span>
      <span class="vote-count"
        >Количество голосов{{ movieInformation.ratingKinopoiskVoteCount }}</span
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppMovieInformation",
  props: {
    movieInformation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    convertedTimeInMinutes() {
      return this.movieInformation.filmLength % 60;
    },
    convertedTimeInHours() {
      return Math.floor(this.movieInformation.filmLength / 60);
    },
    convertedTime() {
      return this.convertedTimeInHours + ":" + this.convertedTimeInMinutes;
    },
    convertedAge() {
      const regExp = /\d+/;
      const movieInformation = this.movieInformation;
      const ratingAge = movieInformation.ratingAgeLimits.match(regExp);
      return ratingAge + " +";
    },
  },
});
</script>

<style lang="scss" module></style>
