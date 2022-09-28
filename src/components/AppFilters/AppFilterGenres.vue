<template>
  <AppFilterToggle>
    <template #button-title> Жанры </template>
  </AppFilterToggle>
  <select v-model="picked" :class="$style.select">
    <option :class="$style.option" disabled value="">Все жанры</option>
    <option v-for="genre in genres" :key="genre.value" :class="$style.option">
      {{ genre.label }}
    </option>
  </select>
</template>

<script>
import AppFilterToggle from "@/components/AppFilters/AppFilterToggle";

export default {
  name: "AppFilterGenres",
  components: {
    AppFilterToggle,
  },
  data() {
    return {
      picked: "",
      genres: [
        { label: "Семейные", value: "семейный" },
        { label: "Биографии", value: "биография" },
        { label: "Боевики", value: "боевик" },
        { label: "Вестерны", value: "вестерн" },
        { label: "Военные", value: "военный" },
        { label: "Детективы", value: "детектив" },
        { label: "Детские", value: "детский" },
        { label: "Документальные", value: "документальный" },
        { label: "Драмы", value: "драма" },
        { label: "Исторические", value: "история" },
        { label: "Комедии", value: "комедия" },
        { label: "Короткометражки", value: "короткометражка" },
        { label: "Криминал", value: "криминал" },
        { label: "Мелодрамы", value: "мелодрама" },
        { label: "Музыкальные", value: "музыка" },
        { label: "Мюзиклы", value: "мюзикл" },
        { label: "Новости", value: "новости" },
        { label: "Приключения", value: "приключения" },
        { label: "Спортивные", value: "спорт" },
        { label: "Триллеры", value: "триллер" },
        { label: "Ужасы", value: "ужасы" },
        { label: "Фантастика", value: "фантастика" },
        { label: "Фильмы-нуар", value: "фильм-нуар" },
        { label: "Фэнтези", value: "фэнтези" },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.select {
  height: 2rem;
  padding: 0 0.4rem;
  background-color: $text-color;
  color: $black;
  border-radius: 0.3rem;
  border: 0.05rem solid $grey;

  &:hover {
    border-color: $purple;
  }
}

.option {
  &:checked {
    background-color: $purple;
  }

  &:hover {
    background-color: $purple;
  }
}
</style>
