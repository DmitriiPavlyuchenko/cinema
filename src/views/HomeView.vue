<template>
  <div class="container">
    <AppHeader />
    <main :class="$style.main">
      <AppAsideMenu />
      <div v-if="!isAuth" :class="$style['main-view']">
        <AppPremiers />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppAsideMenu from "@/components/AppAsideMenu.vue";
import AppPremiers from "@/components/AppPremiers.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HomeView",
  components: { AppPremiers, AppHeader, AppAsideMenu },
  getters: {
    ...mapGetters("signIn", ["isAuth"]),
  },
});
</script>

<style lang="scss" module>
.main {
  display: flex;
}

.main-view {
  flex: 0 1 100%;
}
</style>
