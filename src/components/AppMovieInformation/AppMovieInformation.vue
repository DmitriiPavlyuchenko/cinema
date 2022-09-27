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
        <li class="movie-title-wrapper">
          <h1 :class="$style['movie-title']">
            {{ movieInformation.nameRu }} ({{ movieInformation.year }})
          </h1>
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
        </li>
        <li :class="$style['movie-buttons']">
          <AppFavoritesButton :movie-id="movieId" />
        </li>
        <li class="movie-about-title-wrapper">
          <h2 :class="$style['movie-about-title']">О фильме</h2>
        </li>
        <ul :class="$style['main-info-wrapper']">
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
          <ul :class="$style['movie-genres']">
            <li :class="$style['genre-title']">Жанр</li>
            <li
              v-for="(genre, index) in movieInformation.genres"
              :key="genre.genre"
              :class="$style.genre"
            >
              <span>{{ index ? ", " : "" }}{{ genre.genre }}</span>
            </li>
          </ul>
          <li v-if="movieInformation.slogan" class="slogan-wrapper">
            <span class="slogan-title">Слоган</span>
            <p :class="$style['slogan']">"{{ movieInformation.slogan }}"</p>
          </li>
          <li
            v-if="movieInformation.ratingAgeLimits"
            class="years-limit-wrapper"
          >
            <span class="year-limit-title">Возраст</span>
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
      </ul>
    </div>
    <div :class="$style['movie-main-wrapper']">
      <div :class="$style['movie-body']">
        <div :class="$style.tab">
          <div :class="$style['tab-wrapper']">
            <ButtonBase
              v-for="tab in tabs"
              :key="tab"
              :class="$style['tab-button']"
              @click="currentTab = tab"
              >{{ tab }}
            </ButtonBase>
          </div>
          <div :class="$style['tab-content-wrapper']">
            <AppTabHome
              v-if="currentTab === 'Описание'"
              :class="$style['tab-content']"
              :description="movieInformation.description"
            ></AppTabHome>
            <AppTabStaffs v-else :staff="staff"></AppTabStaffs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppFavoritesButton from "@/components/AppFavorites/AppFavoriteButton";
import ButtonBase from "@/components/ui/ButtonBase";
import AppTabHome from "@/components/AppMovieInformation/AppTabDescription";
import AppTabStaffs from "@/components/AppMovieInformation/AppTabStaffs";

export default defineComponent({
  name: "AppMovieInformation",
  components: {
    ButtonBase,
    AppFavoritesButton,
    AppTabStaffs,
    AppTabHome,
  },
  props: {
    movieInformation: {
      type: Object,
      required: true,
    },
    staff: {
      type: Array,
      required: true,
    },
    movieId: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      genres: null,
      tabs: ["Описание", "Актеры"],
      currentTab: "Описание",
    };
  },
  watch: {
    movieInformation() {
      this.genres = this.movieInformation.genres;
    },
  },
  computed: {
    convertedTimeInMinutes() {
      const minutes = 60;
      return this.movieInformation.filmLength % minutes;
    },
    convertedTimeInHours() {
      const minutes = 60;
      return Math.floor(this.movieInformation.filmLength / minutes);
    },
    convertedTime() {
      return this.convertedTimeInHours + ":" + this.convertedTimeInMinutes;
    },
    convertedRatingAge() {
      const regExp = /\d+/;
      const ratingAge =
        this.movieInformation?.ratingAgeLimits?.match(regExp) + " +";
      return ratingAge;
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
  gap: 1.3rem;
  flex-direction: column;
  font-size: 0.7rem;
  color: $text-color;
}

.main-info-wrapper > li > :first-child {
  color: $grey;
  min-width: 8.5rem;
  display: inline-block;
}

.movie-country:not(:last-child) {
  padding-right: 0.8rem;
}

.genre-title {
  color: $grey;
  min-width: 8.5rem;
  display: inline-block;
}

.genre {
  display: inline-block;
}

.tab-content-wrapper {
  padding-top: 2rem;
  font-size: 0.75rem;
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

.movie-body-list {
  display: flex;
  gap: 0.8rem;
  font-size: 0.9rem;
  padding: 0.8rem 0;
  border-bottom: 0.05rem solid $grey;
}

.movie-list-title:hover:after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  border-bottom: 0.05rem solid $purple;
  padding-bottom: 0.8rem;
}

.movie-list-title:hover {
  color: $grey;
}

.movie-poster-wrapper {
  position: relative;
  width: 100%;
  background-color: $text-color;
  height: auto;
  border-radius: 0.25rem;
}

.movie-country-wrapper {
  display: flex;
}

.movie-poster {
  max-width: 15rem;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
}

.tab-wrapper {
  display: flex;
  gap: 1rem;
}

.genre-item {
  display: flex;
}

.tab-button {
  font-size: 0.9rem;
  position: relative;
  color: $grey;
}

.tab-button:hover {
  color: $text-color;
}

.tab-button:hover:after {
  position: absolute;
  content: "";
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

.main-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.movie-description {
  font-size: 0.75rem;
}

.movie-list-title {
  cursor: pointer;
  position: relative;
}

.movie-about-title {
  font-weight: 600;
  font-size: 1.2rem;
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

.movie-buttons {
  display: flex;
  gap: 1rem;
}
</style>
