<template>
  <MovieListBase v-if="topMovies.films" :movies="topMovies.films">
    <template #list-title>Лучшие 250 фильмов</template>
  </MovieListBase>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTopMovies",
  created() {
    this.getTopMovies();
  },
  computed: {
    ...mapGetters("cinema", ["topMovies"]),
  },
  methods: {
    ...mapActions("cinema", ["getTopMovies"]),
  },
});
</script>

<style lang="scss" module></style>
