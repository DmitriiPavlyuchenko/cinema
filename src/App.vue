<template>
  <AppHeader />
  <main :class="$style.main">
    <div class="container">
      <!--      <AppAsideMenu />-->
      <div v-if="!isAuth" :class="$style['main-view']">
        <router-view v-slot="{ Component }">
          <Component :is="Component"></Component>
        </router-view>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/styles/style.scss";
import { mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppAsideMenu from "@/components/AppAsideMenu.vue";

export default defineComponent({
  name: "App",
  components: { AppHeader },
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
  padding: 1rem 0;
}
</style>
