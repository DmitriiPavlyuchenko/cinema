<template>
  <div class="film">
    <div class="film-poster"></div>
    <div class="film-information">
      <h3 class="film-title">{{ filmInformation.nameRu }}</h3>
      <div class="film-country-wrapper">
        <span>Страна: </span
        ><span
          v-for="country in filmInformation.countries"
          :key="country.country"
          class="film-country"
          >{{ country.country }}</span
        >
      </div>
      <span class="film-description">{{ filmInformation.description }}</span>
      <div
        v-for="genre in filmInformation.genres"
        :key="genre"
        class="film-genres"
      >
        {{ genre.genre }}
      </div>
      <span class="film-time"
        >Время {{ filmInformation.filmLength }} мин. / {{ convertedTime }}</span
      >
      <span class="rating-age-limits">Возраст: {{ convertedAge }}</span>
      <span class="year">Год производства {{ filmInformation.year }}</span>
      <span class="rating">Рейтинг {{ filmInformation.ratingKinopoisk }}</span>
      <span class="vote-count"
        >Количество голосов{{ filmInformation.ratingKinopoiskVoteCount }}</span
      >
    </div>
    <div class="actors-wrapper">
      <ul class="actor-list">
        <li v-for="actor in staff" :key="actor.staffId" class="actor">
          {{ actor.nameRu }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "AppFilmInformation",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getFilmInformation(this.id);
    this.getStaffInformation(this.id);
  },
  computed: {
    ...mapGetters("cinema", ["filmInformation", "staff"]),
    convertedTimeInMinutes() {
      return this.filmInformation.filmLength % 60;
    },
    convertedTimeInHours() {
      return Math.floor(this.filmInformation.filmLength / 60);
    },
    convertedTime() {
      return this.convertedTimeInHours + ":" + this.convertedTimeInMinutes;
    },
    convertedAge() {
      const regExp = /\d+/;
      const filmInformation = this.filmInformation;
      const ratingAge = filmInformation.ratingAgeLimits.match(regExp);
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
    ...mapActions("cinema", ["getFilmInformation", "getStaffInformation"]),
  },
});
</script>

<style lang="scss" module></style>
