<template>
  <AppPremiers />
  <AppTopMovies />
  <AppTopAwaitMovies />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppPremiers from "@/components/AppPremiers.vue";
import { mapGetters } from "vuex";
import AppTopMovies from "@/components/AppTopMovies.vue";
import AppTopAwaitMovies from "@/components/AppTopAwaitMovies.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppTopAwaitMovies, AppTopMovies, AppPremiers },
  getters: {
    ...mapGetters("signIn", ["isAuth"]),
  },
});
</script>

<style lang="scss" module></style>
