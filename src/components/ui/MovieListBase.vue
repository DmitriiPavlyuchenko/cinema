<template>
  <div :class="$style['movie-list']">
    <h2 :class="$style['list-title']">
      <slot name="list-title"></slot>
    </h2>
    <div :class="$style['movie-list-wrapper']">
      <ul :class="$style['list']">
        <li
          v-for="movie in movies"
          :key="[movie.kinopoiskId ? movie.kinopoiskId : movie.filmId]"
          :class="$style['list-item']"
        >
          <div
            :class="$style['card']"
            :style="{ backgroundImage: `url(${movie.posterUrl}` }"
          >
            <div :class="$style['movie-poster']">
              <img
                :alt="movie.nameRu"
                :class="$style['movie-image']"
                :src="movie.posterUrlPreview"
              />
            </div>
            <div :class="$style['movie-description']">
              <span :class="$style['movie-name']">{{ movie.nameRu }}</span>
              <span v-if="movie.premiereRu" :class="$style['realise-date']"
                >Дата выхода в России: {{ movie.premiereRu }}</span
              >
              <span :class="$style['year-issue']"
                >Год выпуска: {{ movie.year }}</span
              >
              <div :class="$style.genres">
                <span
                  v-for="genre in movie.genres"
                  :key="genre"
                  :class="$style['genre-item']"
                  >{{ genre.genre }}</span
                >
              </div>
              <router-link
                v-if="movie.kinopoiskId"
                :class="$style.information"
                :to="{
                  name: 'movie_information',
                  params: {
                    id: movie.kinopoiskId,
                  },
                }"
                >Подробнее
              </router-link>
              <router-link
                v-if="movie.filmId"
                :class="$style.information"
                :to="{
                  name: 'movie_information',
                  params: { id: movie.filmId },
                }"
                >Подробнее
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieListBase",
  props: {
    movies: {
      type: [Object, null],
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
.premiers-wrapper {
}

.list {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
}

.list-item {
  width: 30rem;
  height: 15rem;
  border-radius: 2rem;
}

.card {
  display: flex;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  position: relative;
  z-index: 5;
  border-radius: 1rem;
  align-items: center;
  padding: 1rem;
  gap: 2.5rem;
  background-color: #727272;
}

.card:hover {
  box-shadow: 0 0 0.75rem silver;
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.75;
  z-index: -1;
  background-color: $black;
  width: 100%;
  border-radius: 1rem;
}

.movie-poster {
  min-width: 8rem;
  max-width: 100%;
  height: 12rem;
}

.movie-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  background-color: $background-color;
}

.movie-description {
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  gap: 0.8rem;
}

.movie-name {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 80%;
}

.genres {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.genre-item {
  border-radius: 0.4rem;
  padding: 0.3rem 0.5rem;
  background: rgba(255, 255, 255, 0.15);
}

.information {
  border: 1px solid $text-color;
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  max-width: 8rem;
  border-radius: 0.8rem;
}

.information:hover {
  background: $hover-button;
}
</style>
