<template>
  <AppPremiers />
  <AppTopMovies />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppPremiers from "@/components/AppPremiers.vue";
import { mapGetters } from "vuex";
import AppTopMovies from "@/components/AppTopMovies.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppTopMovies, AppPremiers },
  getters: {
    ...mapGetters("signIn", ["isAuth"]),
  },
});
</script>

<style lang="scss" module></style>
