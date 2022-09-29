<template>
  <div :class="$style.track">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppFilterSliderTrack",
};
</script>

<style lang="scss" module>
.track {
  width: 100%;
  height: 3px;
  border-radius: 3px;
}
</style>
