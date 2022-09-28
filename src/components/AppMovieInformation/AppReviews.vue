<template>
  <div v-if="hasReviews" class="reviews">
    <span class="reviews-title">Рецензии кинокритиков</span>
    <div :class="$style['reviews-content']">
      <ul :class="$style['reviews-list']">
        <li
          v-for="(review, index) in reviews.items"
          :key="review.kinopoiskId"
          :class="[
            $style['reviews-item'],
            $style[review.type === 'POSITIVE' ? 'green-bg' : 'red-bg'],
          ]"
        >
          <div :class="$style['review-content']">
            <span :class="$style['review-title']">{{ review.title }}</span>
            <p
              :class="[
                $style['review-description'],
                $style[activeIndex === index ? '' : 'review-toggle'],
              ]"
              v-html="review.description"
            ></p>
            <ButtonBase
              v-if="activeIndex !== index"
              :class="$style['open-review']"
              @click="activeIndex = index"
              >Показать всю рецензию</ButtonBase
            >
            <ButtonBase
              v-else
              :class="$style['open-review']"
              @click="activeIndex = null"
              >Скрыть рецензию</ButtonBase
            >
          </div>
          <div :class="$style['review-bottom']">
            <span :class="$style['review-date']">{{
              review.date.slice(0, 10)
            }}</span>
            <div :class="$style['review-rating']">
              <ButtonBase :class="$style['button-rating']">
                <IconBase height="18" name="like" width="18">
                  <IconLike />
                </IconBase>
                <span>Полезно</span>
                <span>{{ review.positiveRating }}</span>
              </ButtonBase>
              <ButtonBase :class="$style['button-rating']">
                <IconBase height="20" name="dislike" width="20">
                  <IconDislike />
                </IconBase>
                <span>Нет</span>
                <span>{{ review.negativeRating }}</span>
              </ButtonBase>
            </div>
          </div>
        </li>
      </ul>
      <ul :class="$style['reviews-information-list']">
        <li :class="$style['reviews-information-item']">
          <span :class="[$style['review-count'], $style['black']]">
            {{ reviews.total }}
          </span>
          <span class="review-count"> Всего </span>
        </li>
        <li :class="$style['reviews-information-item']">
          <span :class="[$style['review-count'], $style['green']]">
            {{ reviews.totalPositiveReviews }}
            <span :class="$style.percent">{{ positiveRatingsPercentage }}</span>
          </span>
          <span class="review-count"> Положительные </span>
        </li>
        <li :class="$style['reviews-information-item']">
          <span :class="[$style['review-count'], $style['red']]">
            {{ reviews.totalNegativeReviews }}
            <span :class="$style.percent">{{ negativeRatingsPercentage }}</span>
          </span>
          <span class="review-count"> Отрицательные </span>
        </li>
        <li :class="$style['reviews-information-item']">
          <span :class="[$style['review-count'], $style['neutral']]">
            {{ reviews.totalNeutralReviews }}
            <span :class="$style.percent">{{ neutralRatingsPercentage }}</span>
          </span>
          <span class="review-count"> Нейтральные </span>
        </li>
      </ul>
    </div>
  </div>
  <span v-else class="reviews-empty">На данный фильм нет рецензий</span>
</template>

<script>
import { getReviews } from "@/api/cinema/movie/movie-information";
import { SERVER_RESPONSE } from "@/constants/server-code";
import IconLike from "@/components/icons/IconLike.vue";
import IconDislike from "@/components/icons/IconDislike";

export default {
  name: "AppReviews",
  components: { IconDislike, IconLike },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      reviews: [],
      activeIndex: null,
    };
  },
  computed: {
    hasReviews() {
      return this.reviews.items?.length > 0;
    },
    positiveRatingsPercentage() {
      return (
        (this.reviews.totalPositiveReviews / this.reviews.total).toFixed(1) *
          100 +
        "%"
      );
    },
    negativeRatingsPercentage() {
      return (
        (
          (this.reviews.totalNegativeReviews / this.reviews.total) *
          100
        ).toFixed(1) + "%"
      );
    },
    neutralRatingsPercentage() {
      return (
        (this.reviews.totalNeutralReviews / this.reviews.total).toFixed(1) *
          100 +
        "%"
      );
    },
  },
  created() {
    this.getReviews(this.movieId);
  },
  methods: {
    async getReviews(id) {
      try {
        const response = await getReviews(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          this.reviews = response.data;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" module>
.reviews-list {
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 60%;
}

.reviews-information-list {
  max-width: 20%;
  padding-top: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.review-title {
  font-size: 0.9rem;
  color: $black;
  font-weight: 600;
}

.review-description {
  font-size: 0.7rem;
  color: $black;
  opacity: 0.6;
}

.review-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
}

.reviews-item {
  border-radius: 0.2rem;
}

.open-review {
  font-size: 0.7rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  color: $black;
  background-color: #c3d8ca;
  opacity: 0.5;
  max-width: 35%;
}

.review-bottom {
  padding: 0.6rem 1.5rem;
  border-top: 0.05rem solid $grey;
  display: flex;
  align-items: center;
  font-size: 0.65rem;
  justify-content: space-between;
}

.review-rating {
  display: flex;
  gap: 1rem;
  color: $dark;
}

.button-rating {
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  background-color: $text-color;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
}

.review-toggle {
  max-height: 5rem;
  overflow: hidden;
}

.reviews-content {
  display: flex;
  gap: 2.5rem;
}

.review-date {
  color: $dark;
}

.reviews-information-item {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  color: $grey;
  font-size: 0.7rem;
}

.percent {
  color: $grey;
  font-size: 0.75rem;
}

.reviews-information-item > span:first-child {
  font-size: 1.3rem;
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
}

.open-review:hover {
  opacity: 1;
}

.red-bg {
  background-color: #ffe8d9;
}

.green-bg {
  background-color: #d9f0e1;
}

.black {
  color: $black;
}

.red {
  color: $error;
}

.green {
  color: $success;
}

.neutral {
  color: $grey;
  opacity: 0.8;
}
</style>
