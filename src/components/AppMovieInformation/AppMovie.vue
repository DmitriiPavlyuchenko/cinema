<template>
  <div class="buttons">
    <ButtonBase :class="$style.back" @click="$router.go(-1)">
      <IconBase
        :class="$style['icon-back']"
        height="17"
        icon-name="arrow-left"
        width="17"
      >
        <IconArrowLeft />
      </IconBase>
      <span>Назад</span>
    </ButtonBase>
  </div>
  <!--  <div :class="$style.movie">-->
  <!--    <div :class="$style['movie-information-wrapper']">-->
  <!--      <AppMovieInformation-->
  <!--        :class="$style['movie-information']"-->
  <!--        :movie-id="this.$route.params.id"-->
  <!--        :movieInformation="movieInformation"-->
  <!--        :staff="staff"-->
  <!--      />-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <AppSimilarMovies :similarMovies="similarMovies" />-->
  <AppReviews :movieId="this.$route.params.id" />
</template>

<script>
import AppMovieInformation from "@/components/AppMovieInformation/AppMovieInformation";
import AppSimilarMovies from "@/components/AppMovieInformation/AppSimilarMovies";
import { mapActions, mapGetters } from "vuex";
import IconArrowLeft from "@/components/icons/IconArrowLeft";
import ButtonBase from "@/components/ui/ButtonBase";
import { SERVER_RESPONSE } from "@/constants/server-code";
import AppReviews from "@/components/AppMovieInformation/AppReviews";
import { getReviews } from "@/api/cinema/movie/movie-information";

export default {
  name: "AppMovie",
  components: {
    AppReviews,
    ButtonBase,
    IconArrowLeft,
  },
  // AppTrailer, AppSimilarMovies, AppStaff, AppMovieInformationAppSimilarMovies, AppMovieInformation
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
.back {
  display: inline-flex;
  gap: 0.3rem;
  align-items: center;
  transition: 0.3s ease-in;
  font-size: 0.8rem;
}

.back:hover > .icon-back {
  transform: translateX(-0.05rem);
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
