<template>
  <div class="trailer">
    <ButtonBase type="button">Трейлер</ButtonBase>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTrailer",
  components: {},

  props: {
    trailer: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped></style>
