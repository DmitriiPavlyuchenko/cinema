<template>
  <MovieListBase :movies="showPremieres">
    <template #list-title>Премьеры</template>
    <template #open-all>
      <router-link :class="$style['open-all']" :to="{ name: 'movies' }"
        >Смотреть все
      </router-link>
    </template>
    <template #show-more>
      <ButtonBase
        v-show="isPremieresListIsEmpty"
        :class="$style['show-more']"
        @click="showMoreMovies"
        >Показать еще
      </ButtonBase>
    </template>
  </MovieListBase>
</template>

<script>
import { defineComponent } from "vue";
import { convertDateMonth } from "@/helpers/date";
import { getPremiers } from "@/api/cinema/premiers/premiers";
import { SERVER_RESPONSE } from "@/constants/server-code";

export default defineComponent({
  name: "AppPremieres",
  data() {
    return {
      premieresList: {},
      showPremieres: {},
    };
  },
  created() {
    this.getPremieres();
  },
  computed: {
    isPremieresListIsEmpty() {
      return this.premieresList.length !== 0;
    },
  },
  methods: {
    async getPremieres() {
      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = convertDateMonth(date.getMonth());
        const data = { year: year, month: month };
        const response = await getPremiers(data);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          const data = response.data.items;
          const firstMovie = 0;
          const lastMovie = 10;
          this.showPremieres = data.splice(firstMovie, lastMovie);
          this.premieresList = data;
        }
      } catch (e) {
        console.log(e);
      }
    },
    showMoreMovies() {
      const firstMovie = 0;
      const lastMovie = 10;
      const premieres = this.premieresList.splice(firstMovie, lastMovie);
      this.showPremieres = [...this.showPremieres, ...premieres];
    },
  },
});
</script>

<style lang="scss" module>
@import "@/assets/styles/utils/mixins.scss";

.open-all,
.show-more {
  @include default-button;
}

.open-all:hover,
.show-more:hover {
  background-color: $purple-hover;
}
</style>
