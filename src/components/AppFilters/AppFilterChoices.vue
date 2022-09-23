<template>
  <ul :class="$style['filters-choices']">
    <li :class="$style['filter-item']">Рейтинг: 1-10</li>
    <li :class="$style['filter-item']">Года производства: 1960 - 2022</li>
    <li :class="$style['filter-item']">Жанр: Все жанры</li>
    <li :class="$style['filter-item']">Год выхода: Сначала новые</li>
  </ul>
</template>

<script>
export default {
  name: "AppFilterChoices",
};
</script>

<style lang="scss" module>
.filter-title {
  font-size: 1.2rem;
}

.filters-choices {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  gap: 0.5rem;
  flex-direction: column;
}

.filter-item {
  display: inline-flex;
  font-size: 0.6rem;
  border: 0.05rem solid var(--text-color);
  padding: 0.3rem;
  border-radius: 0.2rem;
}
</style>
