<template>
  <ButtonBase :class="$style['open-trailer']" type="button" @click="openTrailer"
    >Трейлер</ButtonBase
  >
</template>

<script>
import { defineComponent } from "vue";
import { getTrailer } from "@/api/cinema/movie/movie-information";
import { SERVER_RESPONSE } from "@/constants/server-code";

export default defineComponent({
  name: "AppTrailer",
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      trailer: {},
    };
  },
  methods: {
    async openTrailer() {
      try {
        const response = await getTrailer(this.movieId);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          this.trailer = response.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<style lang="scss" module>
@import "@/assets/styles/utils/mixins.scss";
.open-trailer {
  @include default-button;
  border-radius: 1rem;
}

.open-trailer:hover {
  background-color: $purple-hover;
}
</style>
