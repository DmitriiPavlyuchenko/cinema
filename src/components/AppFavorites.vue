<template>
  <ButtonBase
    :class="
      $style[isMovieInFavorites ? 'remove-from-favorites' : 'add-to-favorites']
    "
    @click="toggleFavoriteMovie"
  >
    <IconBase
      v-if="!isMovieInFavorites"
      :class="$style['icon-favorites']"
      height="16"
      icon-name="favorites"
      width="16"
    >
      <IconFavorites />
    </IconBase>
    <IconBase
      v-else-if="isMovieInFavorites"
      :class="$style['icon-favorites']"
      height="16"
      icon-name="favorites"
      width="16"
    >
      <IconCheck />
    </IconBase>
    <span>Буду смотреть</span>
  </ButtonBase>
</template>

<script>
import IconFavorites from "@/components/icons/IconFavorites";
import { getItem, setItem } from "@/helpers/persistanceStorage";
import IconCheck from "@/components/icons/IconCheck";

export default {
  name: "AppFavorites",
  components: { IconCheck, IconFavorites },
  props: {
    movieId: {
      required: false,
    },
  },
  data() {
    return {
      isMovieInFavorites: false,
    };
  },
  created() {
    this.isMovieInLocalStorage();
  },
  methods: {
    toggleFavoriteMovie() {
      const moviesId = getItem("favorites");
      const moviesIdArray = Array.from(moviesId);
      const isMovieInLocalStorage = moviesIdArray.includes(this.movieId);
      if (!isMovieInLocalStorage) {
        this.addToFavorites(moviesIdArray);
      } else {
        this.removeFromFavorites(moviesIdArray);
      }
    },
    addToFavorites(moviesIdArray) {
      setItem("favorites", [...moviesIdArray, this.movieId]);
      this.isMovieInFavorites = true;
    },
    removeFromFavorites(moviesIdArray) {
      const newMoviesIdList = moviesIdArray.filter(
        (movieId) => movieId !== this.movieId
      );
      setItem("favorites", [...newMoviesIdList]);
      this.isMovieInFavorites = false;
    },
    isMovieInLocalStorage() {
      const moviesId = getItem("favorites");
      const moviesIdArray = Array.from(moviesId);
      this.isMovieInFavorites = moviesIdArray.includes(this.movieId);
    },
  },
};
</script>

<style lang="scss" module>
.add-to-favorites {
  color: $text-color;
  background-color: $dark;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  display: flex;
  gap: 0.3rem;
  font-size: 0.6rem;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  border: 0.05rem solid $dark;
}

.add-to-favorites:hover {
  opacity: 1;
}

.remove-from-favorites {
  color: $text-color;
  background-color: $dark;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  display: flex;
  gap: 0.3rem;
  font-size: 0.6rem;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  border: 0.05rem solid $purple-hover;
}

.remove-from-favorites:hover {
  opacity: 1;
}
</style>
