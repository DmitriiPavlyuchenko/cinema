<template>
  <ModalBase :isModalOpen="isFiltersOpen" @closeModal="close">
    <template #header>
      <span>Фильтры</span>
    </template>
    <template #body>
      <SelectBase
        v-model="filter.countryId"
        :labelName="'countries'"
        :listName="'countries-list'"
      >
        <template #list-title>Страны</template>
        <template #option>
          <option
            v-for="option in filters.countries"
            :key="option.value"
            :value="option.id"
          >
            {{ option.country }}
          </option>
        </template>
      </SelectBase>
      <SelectBase
        v-model="filter.genre"
        :labelName="'genre'"
        :listName="'genre-list'"
        value=""
      >
        <template #list-title>Жанры</template>
        <template #option>
          <option v-for="option in filters.genres" :key="option.value">
            {{ option.genre }}
          </option>
        </template>
      </SelectBase>
      <SelectBase
        v-model="filter.order"
        :labelName="'sort'"
        :listName="'sort-list'"
      >
        <template #list-title>Порядок</template>
        <template #option>
          <option v-for="option in options.order" :key="option.value">
            {{ option.name }}
          </option>
        </template>
      </SelectBase>
      <SelectBase
        v-model="filter.type"
        :labelName="'type'"
        :listName="'type-list'"
      >
        <template #list-title>Тип</template>
        <template #option>
          <option v-for="option in options.type" :key="option.value">
            {{ option.name }}
          </option>
        </template>
      </SelectBase>
    </template>
  </ModalBase>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  name: "FiltersModal",
  props: {
    isFiltersOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
  data() {
    return {
      filter: {
        countryId: null,
        genre: null,
        order: "",
        type: "",
      },
      options: {
        order: [
          { name: "Год", value: "YEAR" },
          { name: "Рейтинг", value: "RATING" },
          { name: "Количество голосов", value: "NUM_VOTE" },
        ],
        type: [
          {
            name: "Фильм",
            value: "FILM",
          },
          {
            name: "Тв шоу",
            value: "TV_SHOW",
          },
          {
            name: "Сериал",
            value: "TV_SERIES",
          },
          {
            name: "Мини сериал",
            value: "MINI_SERIES",
          },
          {
            name: "Все",
            value: "ALL",
          },
        ],
      },
    };
  },
  watch: {
    isFiltersOpen() {
      if (this.isFiltersOpen) {
        this.getFilters();
      }
    },
  },
  computed: {
    ...mapGetters("filters", ["filters"]),
  },
  methods: {
    ...mapActions("filters", ["getFilters"]),
    close() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style lang="scss" module></style>
