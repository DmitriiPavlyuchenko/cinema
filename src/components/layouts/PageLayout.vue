<template>
  <div :class="$style.wrapper">
    <AppFilters />
    <router-view></router-view>
  </div>
</template>

<script>
import AppFilters from "@/components/AppFilters/AppFilters";
export default {
  name: "PageLayout",
  components: { AppFilters },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  gap: 3rem;
}
</style>
