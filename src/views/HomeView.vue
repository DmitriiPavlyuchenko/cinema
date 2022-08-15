<template>
  <div class="container">
    <AppHeader />
    <AppAsideMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppAsideMenu from "@/components/AppAsideMenu.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppHeader, AppAsideMenu },
});
</script>

<style lang="scss" module></style>
