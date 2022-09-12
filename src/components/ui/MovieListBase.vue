<template>
  <div :class="$style['movie-list']">
    <div :class="$style['movie-list-header']">
      <h2 :class="$style['list-title']">
        <slot name="list-title"></slot>
      </h2>
      <slot name="open-all"></slot>
    </div>
    <div :class="$style['movie-list-wrapper']">
      <ul :class="$style['list']">
        <li
          v-for="movie in movies"
          :key="[movie.kinopoiskId ? movie.kinopoiskId : movie.filmId]"
          :class="$style['list-item']"
        >
          <div :class="$style.card">
            <router-link
              :class="$style['movie-link']"
              :to="{
                name: 'movie_information',
                params: {
                  id: movie.kinopoiskId ? movie.kinopoiskId : movie.filmId,
                },
              }"
            >
              <img
                :alt="movie.nameRu"
                :class="$style['movie-image']"
                :src="movie.posterUrlPreview"
              />
            </router-link>
            <span :class="$style['movie-title']">{{ movie.nameRu }}</span>
            <span v-if="movie.rating" :class="$style['movie-rating']">{{
              movie.rating
            }}</span>
          </div>
        </li>
      </ul>
    </div>
    <ButtonBase :class="$style['show-more']">Показать еще</ButtonBase>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieListBase",
  components: {},

  props: {
    movies: {
      type: [Object, null],
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.movie-list {
  padding-top: 3.5rem;
}

.list {
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding-top: 1.5rem;
  grid-template-columns: repeat(5, 1fr);
}

.list-item {
  border-radius: 2rem;
}

.card {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
}

.movie-link {
  border-radius: 0.2px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  transition-delay: 0.3s;
  height: 80%;
}

.movie-link:hover:before {
  content: "";
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  background-color: $black;
  border-radius: 0.2rem;
}

.movie-title {
  font-size: 0.8rem;
  line-height: 160%;
}

.movie-image {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}

.movie-rating {
  z-index: 30;
  border-radius: 0.3rem;
  position: absolute;
  padding: 0.2rem 0.25rem;
  display: inline-block;
  background-color: $success;
  top: 0.5rem;
  left: 0.5rem;
}

.show-more {
  display: block;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  background-color: $purple;
  border-radius: 0.3rem;
}

.show-more:hover {
  background-color: $purple-hover;
}
</style>
