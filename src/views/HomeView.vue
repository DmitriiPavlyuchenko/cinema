<template>
  <AppPremiers />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppAsideMenu from "@/components/AppAsideMenu.vue";
import AppPremiers from "@/components/AppPremiers.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HomeView",
  components: { AppPremiers },
  getters: {
    ...mapGetters("signIn", ["isAuth"]),
  },
});
</script>

<style lang="scss" module></style>
