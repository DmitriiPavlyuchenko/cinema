<template>
  <div class="movie">
    <div :class="$style['movie-header']">
      <div :class="$style['movie-preview-wrapper']">
        <div :class="$style['movie-poster-wrapper']">
          <img
            :alt="movieInformation.nameRu"
            :class="$style['movie-poster']"
            :src="movieInformation.posterUrlPreview"
          />
          <div
            v-if="movieInformation.ratingKinopoisk"
            :class="$style['rating-wrapper']"
          >
            <span :class="$style.rating">{{
              movieInformation.ratingKinopoisk
            }}</span>
          </div>
        </div>
      </div>
      <ul :class="$style['movie-about-information']">
        <h3 :class="$style['movie-title']">
          {{ movieInformation.nameRu }} ({{ movieInformation.year }})
        </h3>
        <span
          v-if="movieInformation.nameOriginal"
          :class="$style['movie-title-en']"
          >{{ movieInformation.nameOriginal }}
          <span
            v-if="movieInformation.ratingAgeLimits"
            :class="$style['rating-age-limits']"
            >{{ convertedRatingAge }}</span
          >
        </span>
        <h4 :class="$style['movie-about-title']">О фильме</h4>
        <li class="year-wrapper">
          <span class="production-year">Год производства</span>
          <span class="year">{{ movieInformation.year }}</span>
        </li>
        <li :class="$style['movie-country-wrapper']">
          <span class="country">Страна</span
          ><span
            v-for="country in movieInformation.countries"
            :key="country.country"
            :class="$style['movie-country']"
            >{{ country.country }}</span
          >
        </li>
        <ul class="movie-genres">
          <ul :class="$style['genre-item']">
            <span :class="$style['genre-title']">Жанр</span>
            <li
              v-for="genre in movieInformation.genres"
              :key="genre"
              :class="$style.genre"
            >
              <span>{{ genre.genre }}</span>
            </li>
          </ul>
        </ul>
        <li v-if="movieInformation.slogan" class="slogan-wrapper">
          <span class="slogan-title">Слоган</span>
          <p :class="$style['slogan']">"{{ movieInformation.slogan }}"</p>
        </li>
        <li v-if="movieInformation.ratingAgeLimits" class="years-limit-wrapper">
          <span class="year-limit-title">Возраст: </span>
          <span class="rating-age-limits">{{ convertedRatingAge }}</span>
        </li>
        <li class="time-wrapper">
          <span class="time-title">Время</span>
          <span class="time"
            >{{ movieInformation.filmLength }} мин. / {{ convertedTime }}</span
          >
        </li>
      </ul>
    </div>
    <div :class="$style['movie-main-wrapper']">
      <div :class="$style['movie-body']">
        <h4 :class="$style['movie-body-title']">Описание</h4>
        <p :class="$style['movie-description']">
          {{ movieInformation.description }}
        </p>
      </div>
    </div>
    <div :class="$style['movie-footer']">
      <AppStaff :class="$style['movie-staff']" :staff="staff" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppStaff from "@/components/AppMovieInformation/AppStaff";

export default defineComponent({
  name: "AppMovieInformation",
  components: {
    AppStaff,
  },
  props: {
    movieInformation: {
      type: Object,
      required: true,
    },
    staff: {
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
    convertedRatingAge() {
      const regExp = /\d+/;
      const ratingAge = this.movieInformation?.ratingAgeLimits?.match(regExp);
      return ratingAge + " +";
    },
  },
});
</script>

<style lang="scss" module>
.movie-header {
  display: flex;
  gap: 5rem;
}

.movie-title {
  font-size: 2rem;
}

.movie-title-en {
  font-size: 0.8rem;
  color: $grey;
  display: flex;
  align-items: center;
}

.movie-short-description {
  font-size: 0.9rem;
  width: 60%;
}

.movie-body {
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 130%;
}

.movie-about-information {
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
}

.movie-about-information > li > :first-child {
  color: $grey;
  min-width: 11.5rem;
  display: inline-block;
}

.movie-country:not(:last-child) {
  padding-right: 0.8rem;
}

.genre-title {
  color: $grey;
  min-width: 11.5rem;
  display: inline-block;
}

.genre {
  display: inline-block;
}

.slogan {
  display: inline-block;
}

.movie-body-title {
  font-size: 1.2rem;
}

.movie-footer {
  padding-top: 3rem;
  font-size: 0.85rem;
}

.movie-description {
  line-height: 160%;
}

.movie-preview-wrapper {
  display: flex;
  justify-content: space-between;
}

.movie-poster-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.movie-country-wrapper {
  display: flex;
}

.movie-poster {
  max-width: 12rem;
  display: block;
  width: 100%;
}

.genre-item {
  display: flex;
}

.rating {
  background: $success;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.rating-wrapper {
  display: flex;
  left: 0.5rem;
  top: 0.5rem;
  position: absolute;
  flex-direction: column;
  gap: 0.3rem;
}

.movie-about-title {
  font-weight: 600;
  font-size: 1.5rem;
}

.rating-age-limits {
  border: 0.05rem solid $grey;
  padding: 0.07rem 0.1rem;
  font-size: 0.5rem;
  margin-left: 0.3rem;
}

.movie-main-wrapper {
  display: flex;
  padding-top: 3rem;
}
</style>
