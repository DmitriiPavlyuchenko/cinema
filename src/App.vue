<template>
  <AppHeader />
  <main :class="$style.main">
    <div class="container">
      <div v-if="!isAuth" :class="$style['main-view']">
        <router-view v-slot="{ Component }">
          <Component :is="Component"></Component>
        </router-view>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/styles/style.scss";
import { mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppBanner from "@/components/AppBanner.vue";
import AppFooter from "@/components/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: { AppFooter, AppHeader },
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
  flex-direction: column;
}

.main-view {
  flex: 0 1 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
