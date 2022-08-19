<template>
  <HomeView />
</template>

<script lang="ts">
import HomeView from "@/views/HomeView.vue";
import { defineComponent } from "vue";
import "@/assets/styles/style.scss";
import { mapActions } from "vuex";

export default defineComponent({
  name: "App",
  components: { HomeView },
  mounted() {
    this.isUserLoggedIn();
  },
  methods: {
    ...mapActions("signIn", ["isUserLoggedIn"]),
  },
});
</script>

<style lang="scss"></style>
