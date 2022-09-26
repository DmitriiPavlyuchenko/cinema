<template>
  <p class="movie-description">{{ description }}</p>
</template>

<script>
export default {
  name: "AppTabDescription",
  props: {
    description: {
      type: [String],
      required: false,
    },
  },
};
</script>

<style lang="scss"></style>
