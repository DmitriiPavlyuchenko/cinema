<template>
  <AppPremieres />
  <!--  <AppTopMovies />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import AppPremieres from "@/components/AppPremieres.vue";
import { mapGetters } from "vuex";

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
