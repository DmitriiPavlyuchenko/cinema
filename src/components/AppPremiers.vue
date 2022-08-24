<template>
  <ul class="premiers">
    <li
      v-for="premier in premiers"
      :key="premier.kinopoiskId"
      class="premiers-item"
    >
      <span>{{ premier.nameEn }}</span>
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

<style lang="scss" module></style>
