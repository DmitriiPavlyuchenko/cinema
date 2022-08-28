<template>
  <div class="movie">
    <AppMovieInformation :movieInformation="movieInformation" />
    <!--    <AppSimilarMovies :similarMovies="similarMovies" />-->
    <!--    <AppStaff :staff="staff" />-->
    <!--    <AppTrailer :trailer="trailer" />-->
  </div>
</template>

<script>
import AppMovieInformation from "@/components/AppMovieInformation/AppMovieInformation";
import AppSimilarMovies from "@/components/AppMovieInformation/AppSimilarMovies";
import AppStaff from "@/components/AppMovieInformation/AppStaff";
import { mapActions, mapGetters } from "vuex";
import AppTrailer from "@/components/AppMovieInformation/AppTrailer";

export default {
  name: "AppMovie",
  components: { AppTrailer, AppSimilarMovies, AppMovieInformation, AppStaff },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getMovieInformation(this.id);
    // this.getSimilarMovies(this.id);
    // this.getStaffInformation(this.id);
    // this.getTrailer(this.id);
  },
  computed: {
    ...mapGetters("cinema", [
      "staff",
      "movieInformation",
      "similarMovies",
      "trailer",
    ]),
    tenStaff() {
      return this.staff.slice(0, 10);
    },
  },
  methods: {
    ...mapActions("cinema", [
      "getSimilarMovies",
      "getStaffInformation",
      "getMovieInformation",
      "getTrailer",
    ]),
  },
};
</script>

<style scoped></style>
