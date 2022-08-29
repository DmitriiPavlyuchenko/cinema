<template>
  <div class="container">
    <AppHeader />
    <main :class="$style.main">
      <AppAsideMenu />
      <div v-if="!isAuth" :class="$style['main-view']">
        <router-view v-slot="{ Component }">
          <Component :is="Component"></Component>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/styles/style.scss";
import { mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppAsideMenu from "@/components/AppAsideMenu.vue";

export default defineComponent({
  name: "App",
  components: { AppHeader, AppAsideMenu },
  mounted() {
    this.isUserLoggedIn();
  },
  methods: {
    ...mapActions("signIn", ["isUserLoggedIn"]),
  },
});
</script>

<style lang="scss" module>
.main {
  display: flex;
}

.main-view {
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
