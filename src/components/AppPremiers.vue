<template>
  <div :class="$style.premiers">
    <h2 :class="$style['premiers-title']">Премьеры</h2>
    <div :class="$style['premiers-wrapper']">
      <ul :class="$style['premiers-list']">
        <li
          v-for="premier in premiers"
          :key="premier.kinopoiskId"
          :class="$style['premier-item']"
        >
          <div
            :class="$style['premier-card']"
            :style="{ backgroundImage: `url(${premier.posterUrl}` }"
          >
            <div :class="$style['premier-poster']">
              <img
                :alt="premier.nameRu"
                :class="$style['premier-image']"
                :src="premier.posterUrlPreview"
              />
            </div>
            <div :class="$style['premier-description']">
              <span :class="$style['premier-name']">{{ premier.nameRu }}</span>
              <span :class="$style['realise-date']"
                >Дата выхода в России: {{ premier.premiereRu }}</span
              >
              <span :class="$style['year-issue']"
                >Год выпуска: {{ premier.year }}</span
              >
              <div :class="$style.genres">
                Жанры:
                <span
                  v-for="genres in premier.genres"
                  :key="genres"
                  :class="$style['genres-item']"
                  >{{ genres.genre }}</span
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "AppPremiers",
  created() {
    this.getPremiers();
  },
  computed: {
    ...mapGetters("cinema", ["premiers"]),
  },
  methods: {
    ...mapActions("cinema", ["getPremiers"]),
  },
});
</script>

<style lang="scss" module>
.premiers {
  padding-top: 1rem;

  .premiers-wrapper {
  }

  .premiers-list {
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
  }

  .premiers-title {
  }

  .premier-item {
    width: 30rem;
    height: 15rem;
    border-radius: 2rem;
  }

  .premier-card {
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    position: relative;
    z-index: 5;
    border-radius: 2rem;
    align-items: center;
    padding: 1rem;
    gap: 2.5rem;
    background-color: #727272;
  }

  .premier-card:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.4;
    z-index: -1;
    background-color: $black;
    width: 100%;
    border-radius: 2rem;
  }

  .premier-poster {
    max-width: 10rem;
    height: 12rem;
  }

  .premier-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 2rem;
    background-color: $background-color;
  }

  .premier-description {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.8rem;
  }

  .premier-name {
    font-size: 1.3rem;
    font-weight: 600;
    font-style: italic;
  }

  .year-issue {
  }

  .realise-date {
  }

  .genres {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
}
</style>
