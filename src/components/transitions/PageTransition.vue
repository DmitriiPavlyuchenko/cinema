<template>
  <transition name="page-slide">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "PageTransition",
};
</script>

<style lang="scss">
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

.page-slide-enter-active {
  transform-origin: left center;
  animation: fadeInLeft 0.8s;
}

.page-slide-leave-active {
  transform-origin: left center;
}
</style>
