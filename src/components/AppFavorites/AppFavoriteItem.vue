<template>
  <router-link
    :class="$style['main-information']"
    :to="{
      name: 'movie_information',
      params: { id: movieInformation.kinopoiskId },
    }"
  >
    <div :class="$style['poster-wrapper']">
      <img
        :alt="movieInformation.nameRu"
        :class="$style.poster"
        :src="movieInformation.posterUrl"
      />
    </div>
    <div :class="$style.text">
      <span :class="$style.title">{{ movieInformation.nameRu }}</span>
      <div :class="$style.date">
        <span :class="$style.year">{{ movieInformation.year }},</span>
        <span :class="$style.duration"
          >{{ movieInformation.filmLength }} мин.</span
        >
      </div>
      <p :class="$style.description">{{ movieInformation.shortDescription }}</p>
    </div>
  </router-link>
  <div :class="$style.aside">
    <span :class="[$style.rating, ratingColor]">{{
      movieInformation.ratingKinopoisk
    }}</span>
    <AppFavoriteButton
      :movie-id="movieInformation.kinopoiskId"
      @click="removeMovie"
    />
  </div>
</template>

<script>
import AppFavoriteButton from "@/components/AppFavorites/AppFavoriteButton";

export default {
  name: "AppFavoriteItem",
  components: { AppFavoriteButton },
  emits: ["removeMovie"],
  props: {
    movieInformation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ratingColor() {
      return this.movieInformation.ratingKinopoisk > 5
        ? "rating-green"
        : "rating-red";
    },
  },
  methods: {
    removeMovie() {
      this.$emit("removeMovie", this.movieInformation.kinopoiskId);
    },
  },
};
</script>

<style lang="scss" module>
.main-information {
  display: flex;
  gap: 1.5rem;
  width: 60%;
  align-items: center;
}

.aside {
  display: flex;
  gap: 1.5rem;
  width: 40%;
  justify-content: flex-end;
}

.poster-wrapper {
  flex: 0 0 20%;
  height: 100%;
}

.poster {
  width: 100%;
  border-radius: 0.2rem;
}

.title {
  font-weight: 600;
}

.date {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: silver;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.description {
  font-size: 0.7rem;
  color: #c0c0c0;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
</style>

<style lang="scss">
.rating-green {
  color: $success;
}

.rating-red {
  color: $error;
}
</style>
