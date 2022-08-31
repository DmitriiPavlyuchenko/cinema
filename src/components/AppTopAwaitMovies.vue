<template>
  <div :class="$style['top-movies-wrapper']">
    <h2>Топ ожидаемых фильмов</h2>
    <ul :class="$style['movies']">
      <li
        v-for="topAwaitMovie in topAwaitMovies.films"
        :key="topAwaitMovie.filmId"
        :class="$style['top-movie']"
      >
        <router-link
          :class="$style['top-movie-link']"
          :to="{
            name: 'movie_information',
            params: { id: topAwaitMovie.filmId },
          }"
        >
          <img
            :alt="topAwaitMovie.nameRu"
            :class="$style['top-movie-img']"
            :src="topAwaitMovie.posterUrlPreview"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTopAwaitMovies",
  created() {
    this.getTopAwaitMovies();
  },
  computed: {
    ...mapGetters("cinema", ["topAwaitMovies"]),
  },
  methods: {
    ...mapActions("cinema", ["getTopAwaitMovies"]),
  },
});
</script>

<style lang="scss" module>
.top-movies-wrapper {
}

.movies {
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
}

.top-movie {
  width: 10rem;
  height: auto;
  text-align: center;
}

.top-movie:hover {
  box-shadow: 0 0 0.75rem silver;
}

.top-movie-link {
}

.top-movie-img {
  width: 100%;
  height: 100%;
}
</style>
