<template>
  <MovieListBase :movies="topMovies.films">
    <template #list-title>Лучшие 250 фильмов</template>
  </MovieListBase>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieListBase from "@/components/ui/MovieListBase";

export default {
  name: "AppTopMovies",
  components: { MovieListBase },
  created() {
    this.getTopMovies();
  },
  computed: {
    ...mapGetters("cinema", ["topMovies"]),
  },
  methods: {
    ...mapActions("cinema", ["getTopMovies"]),
  },
};
</script>

<style scoped></style>
