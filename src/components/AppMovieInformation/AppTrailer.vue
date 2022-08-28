<template>
  <div class="trailer"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTrailer",
  props: {
    trailer: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped></style>
