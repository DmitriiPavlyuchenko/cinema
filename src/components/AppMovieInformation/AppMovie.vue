<template>
  <div :class="$style.movie">
    <div :class="$style['movie-information-wrapper']">
      <AppMovieInformation
        :class="$style['movie-information']"
        :movieInformation="movieInformation"
        :staff="staff"
      />
    </div>
    <!--    <AppTrailer :trailer="trailer" />-->
  </div>
  <!--  <AppSimilarMovies :similarMovies="similarMovies" />-->
</template>

<script>
import AppMovieInformation from "@/components/AppMovieInformation/AppMovieInformation";
import AppSimilarMovies from "@/components/AppMovieInformation/AppSimilarMovies";
import AppStaff from "@/components/AppMovieInformation/AppStaff";
import { mapActions, mapGetters } from "vuex";
import AppTrailer from "@/components/AppMovieInformation/AppTrailer";

export default {
  name: "AppMovie",
  components: { AppMovieInformation },
  // AppTrailer, AppSimilarMovies, AppStaff, AppMovieInformationAppSimilarMovies
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getMovieInformation(this.id);
    this.getSimilarMovies(this.id);
    this.getStaffInformation(this.id);
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

<style lang="scss" module>
.movie {
  padding: 1.5rem 0;
}

.movie-information-wrapper {
  display: flex;
  gap: 3rem;
}

.movie-information {
  flex: 1 0 60%;
}

.movie-staff {
  flex: 0 1 40%;
}
</style>
