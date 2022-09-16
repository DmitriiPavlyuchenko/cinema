<template>
  <TransitionGroup name="list" tag="ul">
    <slot></slot>
  </TransitionGroup>
</template>

<script>
export default {
  name: "ListTransition",
};
</script>

<style lang="scss">
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
