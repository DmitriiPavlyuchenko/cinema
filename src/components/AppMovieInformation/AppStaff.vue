<template>
  <div class="actors-wrapper">
    <ul class="actor-list">
      <li v-for="actor in tenStaff" :key="actor.staffId" class="actor">
        {{ actor.nameRu }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppStaff",
  props: {
    staff: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tenStaff() {
      const firstElement = 0;
      const lastElement = 10;
      return this.staff.slice(firstElement, lastElement);
    },
  },
});
</script>

<style scoped></style>
