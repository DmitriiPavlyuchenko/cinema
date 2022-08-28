<template>
  <div class="movie">
    <AppMovieInformation :movieInformation="movieInformation" />
    <AppSimilarMovies :similarMovies="similarMovies" />
    <AppStaff :staff="staff" />
  </div>
</template>

<script>
import AppMovieInformation from "@/components/AppMovieInformation/AppMovieInformation";
import AppSimilarMovies from "@/components/AppMovieInformation/AppSimilarMovies";
import AppStaff from "@/components/AppMovieInformation/AppStaff";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppMovie",
  components: { AppSimilarMovies, AppMovieInformation, AppStaff },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getMovieInformation(this.id);
    this.getSimilarMovies(this.id);
    this.getStaffInformation(this.id);
  },
  computed: {
    ...mapGetters("cinema", ["staff", "movieInformation", "similarMovies"]),
  },
  methods: {
    ...mapActions("cinema", [
      "getSimilarMovies",
      "getStaffInformation",
      "getMovieInformation",
    ]),
  },
};
</script>

<style scoped></style>
