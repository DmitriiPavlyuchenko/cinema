<template>
  <section class="banner">
    <div class="container">
      <p class="movie-description"></p>
      <router-link name to="to">Подробнее</router-link>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBanner",
});
</script>

<style scoped></style>
