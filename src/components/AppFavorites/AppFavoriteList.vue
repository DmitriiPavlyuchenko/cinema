<template>
  <ul v-if="hasMovies" :class="$style['favorite-list']">
    <ListTransition>
      <li
        v-for="movie of moviesInformation"
        :key="movie.kinopoiskId"
        :class="$style['favorite-item']"
      >
        <AppFavoriteItem :movieInformation="movie" @removeMovie="removeMovie" />
      </li>
    </ListTransition>
  </ul>
  <span v-else class="list-empty">Список избранных фильмов пустой</span>
</template>

<script>
import AppFavoriteItem from "@/components/AppFavorites/AppFavoriteItem";
import { mapActions } from "vuex";
import { getItem } from "@/helpers/persistanceStorage";
import ListTransition from "@/components/transitions/ListTransition";

export default {
  name: "AppFavoriteList",
  components: {
    AppFavoriteItem,
    ListTransition,
  },
  data() {
    return {
      moviesInformation: [],
    };
  },
  created() {
    this.getMoviesInformation();
  },
  computed: {
    hasMovies() {
      return this.moviesInformation.length > 0;
    },
  },
  methods: {
    ...mapActions("cinema", ["getMovieInformation"]),
    async getMoviesInformation() {
      try {
        const favoriteMovies = Array.from(getItem("favorites"));
        if (favoriteMovies) {
          for (let movie of favoriteMovies) {
            const movieS = await this.getMovieInformation(movie);
            this.moviesInformation.push(movieS);
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    removeMovie(id) {
      this.moviesInformation = this.moviesInformation.filter((movie) => {
        return movie.kinopoiskId !== id;
      });
    },
  },
};
</script>

<style lang="scss" module>
.favorite-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
}

.favorite-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-top: 1px solid var(--purple-dark);
}

.favorite-item:hover {
  box-shadow: 0.05rem 0.05rem 0.05rem 0.05rem var(--purple);
  border-radius: 0.5rem;
  background-color: rgba(77, 77, 77, 0.53);
}
</style>
