<template>
  <MovieListBase :movies="premieres">
    <template #list-title>Премьеры</template>
  </MovieListBase>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "AppPremieres",
  created() {
    this.getPremieres();
  },
  computed: {
    ...mapGetters("cinema", ["premieres"]),
  },
  methods: {
    ...mapActions("cinema", ["getPremieres"]),
  },
});
</script>

<style lang="scss" module></style>
