<template>
  <div class="actors-wrapper">
    <ul class="actor-list">
      <li v-for="actor in staff" :key="actor.staffId" class="actor">
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
    AppStaff: {
      type: Object,
      required: true,
    },
  },
  watch: {
    staff() {
      const tenElements = 10;
      const actors = this.staff.splice(tenElements);
      this.staff = actors;
    },
  },
});
</script>

<style scoped></style>
