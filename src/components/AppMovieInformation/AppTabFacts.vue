<template>
  <div v-if="hasFacts" :class="$style.facts">
    <span :class="$style['facts-title']">Знаете ли вы что...</span>
    <ul :class="$style['facts-list']">
      <li
        v-for="(fact, index) in facts"
        :key="index"
        :class="$style['facts-item']"
      >
        {{ fact }}
      </li>
    </ul>
  </div>
  <span v-else :class="$style['facts-empty']">Извините факты отсутствуют</span>
</template>

<script>
import { getFacts } from "@/api/cinema/movie/movie-information";
import { SERVER_RESPONSE } from "@/constants/server-code";
import { removeLinksFromString } from "@/helpers/cleaning-line";

export default {
  name: "AppTabFacts",
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      facts: [],
    };
  },
  computed: {
    hasFacts() {
      return this.facts.length > 0;
    },
  },
  created() {
    this.getFacts(this.movieId);
  },
  methods: {
    async getFacts(id) {
      try {
        const response = await getFacts(id);
        if (response.status === SERVER_RESPONSE.CODE_200) {
          this.facts = response.data.items.map((string) => {
            return removeLinksFromString(string.text);
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" module>
.facts {
}

.facts-title {
  font-size: 1.3rem;
  color: $text-color;
}

.facts-list {
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  color: $grey;
}

.facts-item:not(:last-child) {
  border-bottom: 0.05rem solid $grey;
  padding-bottom: 0.55rem;
}

.facts-empty {
  font-size: 1.3rem;
  color: $text-color;
}
</style>
