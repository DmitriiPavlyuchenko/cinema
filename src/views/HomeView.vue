<template>
  <div class="container">
    <AppHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: { AppHeader },
});
</script>

<style lang="scss" module></style>
