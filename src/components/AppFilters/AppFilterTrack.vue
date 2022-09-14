<template>
  <InputBase
    v-model.number="minPrice"
    max="10"
    min="0"
    step="10"
    type="range"
  ></InputBase>
  <InputBase
    v-model.number="maxPrice"
    max="10"
    min="0"
    step="10"
    type="range"
  ></InputBase>
</template>

<script>
export default {
  name: "AppFilterTrack",
  props: {
    minPrice: {
      required: true,
      type: Number,
    },
    maxPrice: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style scoped></style>
