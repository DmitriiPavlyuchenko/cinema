<template>
  <AppBanner></AppBanner>
  <AppPremieres />
  <!--  <AppTopMovies />-->
  <!--  <AppTopAwaitMovies />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppPremieres from "@/components/AppPremieres.vue";
import { mapGetters } from "vuex";
import AppTopMovies from "@/components/AppTopMovies.vue";
import AppTopAwaitMovies from "@/components/AppTopAwaitMovies.vue";

export default defineComponent({
  name: "HomeView",
  //AppTopAwaitMovies,AppTopMovies, AppTopMovies, AppTopAwaitMovies
  components: { AppPremieres },
  getters: {
    ...mapGetters("signIn", ["isAuth"]),
  },
});
</script>

<style lang="scss" module></style>
