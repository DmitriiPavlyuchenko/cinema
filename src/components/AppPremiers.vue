<template>
  <h2 :class="$style['premiers-title']">Premiers</h2>
  <ul :class="$style.premiers">
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
            :alt="premier.nameEn"
            :class="$style['premier-image']"
            :src="premier.posterUrlPreview"
          />
        </div>
        <div :class="$style['premier-description']">
          <span :class="$style['premier-name']">{{ premier.nameEn }}</span>
          <span :class="$style['year-issue']">{{ premier.year }}</span>
          <span :class="$style['realise-date']">{{ premier.premiereRu }}</span>
        </div>
      </div>
    </li>
  </ul>
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
.premiers-title {
}

.premiers {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

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
}
</style>
