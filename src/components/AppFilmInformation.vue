<template>
  <div class="film">
    <div class="film-poster"></div>
    <div class="film-information">
      <h3 class="film-title">{{ filmInformation.nameRu }}</h3>
      <div
        v-for="country in filmInformation.countries"
        :key="country.country"
        class="film-country-wrapper"
      >
        <span>Страна: </span
        ><span class="film-country">{{ country.country }}</span>
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
  },
  computed: {
    ...mapGetters("cinema", ["filmInformation"]),
    convertedTimeInMinutes() {
      return this.filmInformation.filmLength % 60;
    },
    convertedTimeInHours() {
      return Math.floor(this.filmInformation.filmLength / 60);
    },
    convertedTime() {
      return this.convertedTimeInHours + ":" + this.convertedTimeInMinutes;
    },
  },
  methods: {
    ...mapActions("cinema", ["getFilmInformation"]),
  },
});
</script>

<style scoped></style>
