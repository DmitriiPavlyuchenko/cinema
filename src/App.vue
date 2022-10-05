<template>
  <AppHeader />
  <main :class="$style.main">
    <div class="container">
      <PageTransition>
        <div :key="$route.path" :class="$style['main-view']">
          <Component :is="layout">
            <router-view> </router-view>
          </Component>
        </div>
      </PageTransition>
    </div>
  </main>
  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/styles/style.scss";
import MainLayout from "@/components/layouts/MainLayout.vue";
import PageLayout from "@/components/layouts/PageLayout.vue";
import AppHeader from "@/components/AppHeader.vue";
import PageTransition from "@/components/transitions/PageTransition.vue";
import AppFooter from "@/components/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: { AppFooter, AppHeader, PageTransition, MainLayout, PageLayout },
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout || "main-layout";
    },
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
