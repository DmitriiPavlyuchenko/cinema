<template>
  <img
    :class="$style['logo-img']"
    alt="logo"
    height="56"
    src="@/assets/img/logo.svg"
    width="56"
  />
</template>

<script>
export default {
  name: "AppLogotype",
};
</script>

<style lang="scss" module>
.logo-img {
  animation-name: logo-rotation;
  animation-duration: 7s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes logo-rotation {
  from {
    transform: rotate(0grad) rotateY(0grad) rotateX(0grad);
  }
  to {
    transform: rotate(400grad) rotateY(400grad) rotateX(400grad);
  }
}
</style>
