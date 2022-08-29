<template>
  <MovieListBase :movies="premiers">
    <template #list-title>Премьеры</template>
  </MovieListBase>
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

<style lang="scss" module></style>
