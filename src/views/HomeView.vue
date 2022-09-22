<template>
  <AppPremieres />
  <!--  <AppTopMovies />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppPremieres from "@/components/AppPremieres.vue";
import { mapGetters } from "vuex";
import AppTopMovies from "@/components/AppTopMovies.vue";

export default defineComponent({
  name: "HomeView",
  //,AppTopMovies, AppTopMovies,
  components: { AppPremieres },
  getters: {
    ...mapGetters("signIn", ["isAuth"]),
  },
});
</script>

<style lang="scss" module></style>
