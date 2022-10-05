<template>
  <AppHeader />
  <main :class="$style.main">
    <div class="container">
      <router-view v-slot="{ Component }">
        <PageTransition>
          <div :key="$route.path" :class="$style['main-view']">
            <Component :is="Component" />
          </div>
        </PageTransition>
      </router-view>
    </div>
  </main>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/styles/style.scss";
import { mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import PageTransition from "@/components/transitions/PageTransition.vue";
import AppFooter from "@/components/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: { AppFooter, AppHeader, PageTransition },
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
  padding: 5rem 1rem;
  background-color: $text-color;
}
</style>
