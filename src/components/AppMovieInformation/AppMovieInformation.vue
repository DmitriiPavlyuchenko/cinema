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
    <div class="actors-wrapper">
      <ul class="actor-list">
        <li v-for="actor in staff" :key="actor.staffId" class="actor">
          {{ actor.nameRu }}
        </li>
      </ul>
    </div>
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
        >Извините, мы не смогли найти подходящих фильмов</span
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "AppMovieInformation",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getMovieInformation(this.id);
    this.getStaffInformation(this.id);
    this.getSimilarMovies(this.id);
  },
  computed: {
    ...mapGetters("cinema", ["movieInformation", "staff", "similarMovies"]),
    hasSimilarMovies() {
      return this.similarMovies.items.length === 0;
    },
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
  watch: {
    staff() {
      const tenElements = 10;
      const actors = this.staff.splice(tenElements);
      this.staff = actors;
    },
  },
  methods: {
    ...mapActions("cinema", [
      "getMovieInformation",
      "getStaffInformation",
      "getSimilarMovies",
    ]),
  },
});
</script>

<style lang="scss" module></style>
