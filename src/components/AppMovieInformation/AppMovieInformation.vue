<template>
  <div class="movie">
    <div class="movie-poster"></div>
    <div class="movie-information">
      <div :class="$style['movie-header']">
        <h3 :class="$style['movie-title']">
          {{ movieInformation.nameRu }} ({{ movieInformation.year }})
        </h3>
        <span
          v-if="movieInformation.nameOriginal"
          :class="$style['movie-title-en']"
          >{{ movieInformation.nameOriginal }}
          <span :class="$style['rating-age-limits']">{{
            convertedRatingAge
          }}</span>
        </span>
        <div :class="$style['movie-preview-wrapper']">
          <div :class="$style['movie-poster-wrapper']">
            <img
              :alt="movieInformation.nameRu"
              :class="$style['movie-poster']"
              :src="movieInformation.posterUrlPreview"
            />
          </div>
          <div
            v-if="movieInformation.ratingKinopoisk"
            :class="$style['rating-wrapper']"
          >
            <span :class="$style.rating">{{
              movieInformation.ratingKinopoisk
            }}</span>
            <span :class="$style['vote-count']"
              >{{ movieInformation.ratingKinopoiskVoteCount }} оценок</span
            >
          </div>
        </div>
        <p :class="$style['movie-short-description']">
          {{ movieInformation.shortDescription }}
        </p>
      </div>
      <div :class="$style['movie-main-wrapper']">
        <div :class="$style['movie-body']">
          <ul :class="$style['movie-about-information']">
            <h4 :class="$style['movie-about-title']">О фильме</h4>
            <li class="year-wrapper">
              <span class="production-year">Год производства</span>
              <span class="year">{{ movieInformation.year }}</span>
            </li>
            <li class="movie-country-wrapper">
              <span class="country">Страна</span
              ><span
                v-for="country in movieInformation.countries"
                :key="country.country"
                :class="$style['movie-country']"
                >{{ country.country }}</span
              >
            </li>
            <ul class="movie-genres">
              <ul class="genre-item">
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
            <li
              v-if="movieInformation.ratingAgeLimits"
              class="years-limit-wrapper"
            >
              <span class="year-limit-title">Возраст: </span>
              <span class="rating-age-limits">{{ convertedRatingAge }}</span>
            </li>
            <li class="time-wrapper">
              <span class="time-title">Время</span>
              <span class="time"
                >{{ movieInformation.filmLength }} мин. /
                {{ convertedTime }}</span
              >
            </li>
          </ul>
          <div :class="$style['movie-footer']">
            <span :class="$style['movie-description']">{{
              movieInformation.description
            }}</span>
          </div>
        </div>
        <AppStaff :class="$style['movie-staff']" :staff="staff" />
      </div>
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
  flex-direction: column;
  gap: 0.6rem;
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
}

.movie-body {
  font-size: 0.75rem;
  line-height: 130%;
  flex: 1 0 60%;
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
}

.movie-poster {
  max-width: 12rem;
  display: block;
  width: 100%;
}

.rating {
  background: $gold;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-weight: 600;
}

.vote-count {
  color: $grey;
  font-size: 0.65rem;
  line-height: 0.9rem;
}

.rating-wrapper {
  display: flex;
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
  justify-content: space-between;
  gap: 3rem;
  padding-top: 3rem;
}
</style>
